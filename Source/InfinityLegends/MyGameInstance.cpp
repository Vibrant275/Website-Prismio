#include "MyGameInstance.h"
#include "WebSocketsModule.h"

void UMyGameInstance::Shutdown()
{
	DisconnectFromServer();
	Super::Shutdown();
}

void UMyGameInstance::ConnectToServer()
{
	if (!FModuleManager::Get().IsModuleLoaded("WebSockets"))
	{
		FModuleManager::Get().LoadModule("WebSockets");
	}

	const FString ServerURL = TEXT("ws://localhost:8080");
    
	WebSocket = FWebSocketsModule::Get().CreateWebSocket(ServerURL);

	WebSocket->OnMessage().AddLambda([this](const FString& Message) {
		OnMessageCallback.Broadcast(Message);
	});

	WebSocket->OnConnected().AddLambda([this]() {
		OnConnected.Broadcast();
	});
	
	WebSocket->Connect();
}

void UMyGameInstance::DisconnectFromServer()
{
	if (WebSocket.IsValid() && WebSocket->IsConnected())
	{
		WebSocket->Close();
	}
}

void UMyGameInstance::SendMessage(const FString& message)
{
	if (WebSocket->IsConnected())
	{
		WebSocket->Send(message);
	}
}

void UMyGameInstance::SendData(const TArray<uint8>& data)
{
}
