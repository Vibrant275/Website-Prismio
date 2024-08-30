// Copyright Vibrant - Infinity Legends. 2023

#pragma once

#include "Kismet/BlueprintFunctionLibrary.h"
#include "Constants.generated.h"

UCLASS()
class INFINITYLEGENDS_API UMyBlueprintFunctionLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:

	UFUNCTION(BlueprintCallable, Category = "Constants")
	static int32 GetMaxPlayers();

	UFUNCTION(BlueprintCallable, Category = "Constants")
	static FString GetGameVersion();

	UFUNCTION(BlueprintCallable, Category = "Constants")
	static FString GetGameData();

	UFUNCTION(BlueprintCallable, Category = "Constants")
	static FString GetGameName();
	
	UFUNCTION(BlueprintCallable, Category = "Constants")
	static FString GetSignUpPageURL();
	
};
