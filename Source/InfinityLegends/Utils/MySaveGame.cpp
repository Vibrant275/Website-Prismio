// MySaveGame.cpp
#include "MySaveGame.h"

UMySaveGame::UMySaveGame()
{
	// Initialize variables here if needed
}

bool UMySaveGame::DoesUserIDExist() const
{
	return !UserID.IsEmpty();
}
