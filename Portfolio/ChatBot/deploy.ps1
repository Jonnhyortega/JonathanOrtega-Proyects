# ==============================
# Script de Deploy AWS Lambda
# Autor: Jonny 🚀
# ==============================

param(
    [string]$AWS_ACCOUNT_ID = "331704540756",
    [string]$REGION = "us-east-1",
    [string]$REPO = "mi-api-lambda",
    [string]$FUNCTION = "miApi",
    [string]$TAG = "latest"
)

# Construir nombre completo del repo
$IMAGE_URI = "$AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO:$TAG"

Write-Host "🔹 Construyendo imagen Docker para $IMAGE_URI ..."

# Build (sin cache, linux/amd64)
docker buildx build --platform linux/amd64 -t $REPO:$TAG --load .

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en docker build"
    exit 1
}

# Taggear imagen
docker tag $REPO:$TAG $IMAGE_URI

# Push a ECR
Write-Host "🔹 Pusheando imagen a ECR..."
docker push $IMAGE_URI

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en docker push"
    exit 1
}

# Actualizar Lambda
Write-Host "🔹 Actualizando Lambda $FUNCTION con imagen $IMAGE_URI ..."
aws lambda update-function-code `
    --function-name $FUNCTION `
    --image-uri $IMAGE_URI

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deploy completado con éxito en Lambda $FUNCTION"
} else {
    Write-Host "❌ Error al actualizar la función Lambda"
    exit 1
}
