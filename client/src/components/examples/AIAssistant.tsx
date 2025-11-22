import AIAssistant from '../AIAssistant';

export default function AIAssistantExample() {
  return (
    <div className="h-screen w-80">
      <AIAssistant 
        onSendMessage={(msg) => console.log('Sent:', msg)}
      />
    </div>
  );
}
