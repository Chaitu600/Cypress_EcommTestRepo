[cmdletBinding()]
param(
    [Parameter()]
    [string]
    $fiddlerURL = "http://localhost:8085",
    $bypassFiddler = ''
)
Write-Information "Configuring Fiddler URL to capture Cypress request - ${$fiddlerURL}"
$env:HTTP_PROXY=$fiddlerURL
$env:NO_PROXY=$bypassFiddler
Write-Warning "if you need to disable, start from a new window"