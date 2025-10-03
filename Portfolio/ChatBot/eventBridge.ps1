# Variables
$functionName = "miApi"
$ruleName = "KeepMiApiWarm"
$targetId = "MiApiTarget"

# 1. Crear la regla de EventBridge que corre cada 5 minutos
aws events put-rule `
  --name $ruleName `
  --schedule-expression "rate(5 minutes)" `
  --state ENABLED

# 2. Dar permiso a EventBridge para invocar tu Lambda
aws lambda add-permission `
  --function-name $functionName `
  --statement-id "AllowEventBridgeInvoke" `
  --action "lambda:InvokeFunction" `
  --principal events.amazonaws.com `
  --source-arn arn:aws:events:us-east-1:331704540756:rule/$ruleName

# 3. Conectar la regla a tu Lambda como target
aws events put-targets `
  --rule $ruleName `
  --targets "Id=$targetId,Arn=arn:aws:lambda:us-east-1:331704540756:function:$functionName"
