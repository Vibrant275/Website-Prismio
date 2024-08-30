#pragma once

#include "IWebSocket.h"
#include "MyGameInstance.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FMessageCallbackDelegate, const FString&, OutputString);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FDataCallbackDelegate, const TArray<uint8>&, Data);
DECLARE_DYNAMIC_MULTICAST_DELEGATE(FWebSocketConnectedDelegate);

UCLASS()
class INFINITYLEGENDS_API UMyGameInstance : public UGameInstance
{
	GENERATED_BODY()

public:

	virtual void Shutdown() override;
	
	UFUNCTION(BlueprintCallable, Category = "Server")
	void ConnectToServer();

	UFUNCTION(BlueprintCallable, Category="Server")
	void DisconnectFromServer();
	
	UFUNCTION(BlueprintCallable, Category = "Server")
	void SendMessage(const FString& message);

	UFUNCTION(BlueprintCallable, Category = "Server")
	void SendData(const TArray<uint8>& data);

	UPROPERTY(BlueprintAssignable, Category = "WebSocket")
	FWebSocketConnectedDelegate OnConnected;
	
	UPROPERTY(BlueprintAssignable, Category = "WebSocket")
	FMessageCallbackDelegate OnMessageCallback;
	
	UPROPERTY(BlueprintAssignable, Category = "WebSocket")
	FDataCallbackDelegate OnDataCallback;
	
	TSharedPtr<IWebSocket> WebSocket;
};
