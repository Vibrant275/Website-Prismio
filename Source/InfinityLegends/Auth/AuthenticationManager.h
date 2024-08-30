// Copyright Vibrant - Infinity Legends. 2023

#pragma once

#include "CoreMinimal.h"
#include "InfinityLegends/MyGameInstance.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "AuthenticationManager.generated.h"

DECLARE_DYNAMIC_DELEGATE_OneParam(FAuthenticationResultCallbackDelegate, FString, AuthenticationResult);

UCLASS()
class INFINITYLEGENDS_API UAuthenticationManager : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:
	UFUNCTION(BlueprintCallable, Category="Authentication")
	static void GetUserID(FAuthenticationResultCallbackDelegate AuthenticationResult);
};
