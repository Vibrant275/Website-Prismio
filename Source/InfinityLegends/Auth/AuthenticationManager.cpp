// Copyright Vibrant - Infinity Legends. 2023

#include "AuthenticationManager.h"
#include "InfinityLegends/Utils/MySaveGame.h"
#include "Kismet/GameplayStatics.h"

void UAuthenticationManager::GetUserID(FAuthenticationResultCallbackDelegate AuthenticationResult)
{
	UMySaveGame* LoadedSaveGame = Cast<UMySaveGame>(UGameplayStatics::LoadGameFromSlot(TEXT("Auth"), 0));
	if (LoadedSaveGame)
	{
		if (LoadedSaveGame->DoesUserIDExist())
		{
			FString ExistingUserID = LoadedSaveGame->UserID;
			AuthenticationResult.Execute(ExistingUserID);
		}
		else
		{
			AuthenticationResult.Execute("null");
		}
	}
	else
	{
		AuthenticationResult.Execute("null");
	}
}
