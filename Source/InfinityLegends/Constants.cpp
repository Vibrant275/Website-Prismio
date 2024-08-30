// Copyright Vibrant - Infinity Legends. 2023

#include "Constants.h"

int32 UMyBlueprintFunctionLibrary::GetMaxPlayers()
{
	return 100;
}

FString UMyBlueprintFunctionLibrary::GetGameVersion()
{
	return "1.0";
}

FString UMyBlueprintFunctionLibrary::GetGameData()
{
	return "GameData";
}

FString UMyBlueprintFunctionLibrary::GetGameName()
{
	return "Infinity Legends";
}

FString UMyBlueprintFunctionLibrary::GetSignUpPageURL()
{
	return "https://vibrant-7.vercel.app/account";
}

