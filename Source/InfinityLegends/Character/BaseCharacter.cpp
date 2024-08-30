// Fill out your copyright notice in the Description page of Project Settings.


#include "BaseCharacter.h"

// Sets default values
ABaseCharacter::ABaseCharacter()
{
 	// Set this character to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

}

// Called when the game starts or when spawned
void ABaseCharacter::BeginPlay()
{
	Super::BeginPlay();
	
}

// Called every frame
void ABaseCharacter::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

}

// Called to bind functionality to input
void ABaseCharacter::SetupPlayerInputComponent(UInputComponent* PlayerInputComponent)
{
	Super::SetupPlayerInputComponent(PlayerInputComponent);
	PlayerInputComponent -> BindAxis(FName(*MoveForwardKey), this, &ABaseCharacter::MoveForward);
	PlayerInputComponent -> BindAxis(FName(*MoveRightKey), this, &ABaseCharacter::MoveRight);
	PlayerInputComponent -> BindAxis(FName(*LookUpKey), this, &ABaseCharacter::LookUp);
	PlayerInputComponent -> BindAxis(FName(*TurnKey), this, &ABaseCharacter::Turn);
	// PlayerInputComponent -> BindAxis(FName(*MoveForwardKey), this, &ABaseCharacter::MoveForward);
}

void ABaseCharacter::MoveForward(float AxisVal)
{
	AddMovementInput(GetActorForwardVector()*AxisVal);
}

void ABaseCharacter::MoveRight(float AxisVal)
{
	AddMovementInput(GetActorRightVector()*AxisVal);
}

void ABaseCharacter::LookUp(float AxisVal)
{
}

void ABaseCharacter::Turn(float AxisVal)
{
}

void ABaseCharacter::Jump()
{
	Super::Jump();
}

