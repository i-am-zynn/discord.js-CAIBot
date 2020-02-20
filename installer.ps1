If (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]"Administrator")) {
    Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`" $PSCommandArgs" -Verb RunAs
    Exit
}
write-output "-----------------------------------"
write-output "CAI-Bot Setup: Par Woomy4680-exe"
write-output "-----------------------------------"
write-output "Ce script va installer NODE JS et toutes les dépendences pour l'exécution de CAI-BOt"
write-output "Installation..."
write-outpout "De chocolatey"
write-output "De NodeJS"