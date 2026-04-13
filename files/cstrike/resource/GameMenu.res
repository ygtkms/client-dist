"GameMenu"
{
	"5"
	{
		"label" "Sunucu 1'e Bağlan"
		"command" "ConnectTo 193.111.76.50:27015"
		"fgcolor" "255 255 0 255"
		"fgcolor_armed" "180 180 0 255"
		"fgcolor_depressed" "150 150 0 255"
	}
	"6"
	{
		"label" "Sunucu 2'ye Bağlan"
		"command" "ConnectTo 193.111.76.51:27015"
	}
	"7"
	{
		"label" ""
		"command" ""
	}
	"1"
	{
		"label" "Oyuna Dön"
		"command" "ResumeGame"
		"OnlyInGame" "1"
	}
	"2"
	{
		"label" "Bağlantıyı Kes"
		"command" "Disconnect"
		"OnlyInGame" "1"
		"notsingle" "1"
	}
	"4"
	{
		"label" "Oyuncu Listesi"
		"command" "OpenPlayerListDialog"
		"OnlyInGame" "1"
		"notsingle" "1"
	}
	"8"
	{
		"label" ""
		"command" ""
		"OnlyInGame" "1"
	}
	"11"
	{
		"label" "Botlarla Oyna"
		"command" "OpenCreateMultiplayerGameDialog"
	}
	"12"
	{
		"label" "Sunucu Bul"
		"command" "OpenServerBrowser"
	}
	"13"
	{
		"label" "Seçenekler"
		"command" "OpenOptionsDialog"
	}
	"14"
	{
		"label" "Çıkış"
		"command" "Quit"
	}
}
