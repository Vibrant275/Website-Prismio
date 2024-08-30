// MySaveGame.h
#pragma once

#include "GameFramework/SaveGame.h"
#include "MySaveGame.generated.h"

UCLASS()
class INFINITYLEGENDS_API UMySaveGame : public USaveGame
{
    GENERATED_BODY()

public:
    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "SaveGameData")
    FString UserID; // Variable to store 'userID'

    // Other data variables here

    UMySaveGame();
    bool DoesUserIDExist() const;
};
