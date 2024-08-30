// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "BaseCharacter.generated.h"

UCLASS()
class INFINITYLEGENDS_API ABaseCharacter : public ACharacter
{
	GENERATED_BODY()

public:
	// Sets default values for this character's properties
	ABaseCharacter();

protected:
	// Called when the game starts or when spawned
	virtual void BeginPlay() override;

public:
	// Called every frame
	virtual void Tick(float DeltaTime) override;

	// Called to bind functionality to input
	virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;

	// Public variables
	// Define Input key for move forward
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="BR Variables")
	FString MoveForwardKey;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="BR Variables")
	FString MoveRightKey;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="BR Variables")
	FString LookUpKey;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="BR Variables")
	FString TurnKey;

	// UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="BR Variables")
	// FString JumpKey;

protected:
	void MoveForward(float AxisVal);
	void MoveRight(float AxisVal);
	void LookUp(float AxisVal);
	void Turn(float AxisVal);
	void Jump();
};
