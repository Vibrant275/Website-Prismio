// Fill out your copyright notice in the Description page of Project Settings.


#include "BaseZoneActor.h"

// Sets default values
ABaseZoneActor::ABaseZoneActor()
{
 	// Set this actor to call Tick() every frame.  You can turn this off to improve performance if you don't need it.
	PrimaryActorTick.bCanEverTick = true;

}

// Called when the game starts or when spawned
void ABaseZoneActor::BeginPlay()
{
	Super::BeginPlay();
	
}

// Called every frame
void ABaseZoneActor::Tick(float DeltaTime)
{
	Super::Tick(DeltaTime);

}

