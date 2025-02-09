import { fetchOpenAIResponse } from "@/app/openai";
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { StyleSheet } from 'react-native';

export default function Chat() {

    const [input,setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputSubmit = async () => {
        //Do not allow empty input
        if (input.trim().length == 0) {
            return;
        }

        setLoading(true);
        const openAIResponse = await fetchOpenAIResponse(input);
        setResponse(openAIResponse);
        setLoading(false);
        setInput("");

    }

    return (
        <View>
            <Text>Chat Screen</Text>
            <TextInput
              style = {{
                height: 40,
                borderColor: "black",
                borderWidth: 1,
                paddingHorizontal: 10,
                borderRadius: 8,
                marginBottom: 10,
              }}
              placeholder="What are your financial goals?"
              value={input}
              onChangeText={(newInput) => setInput(newInput)}
            />
            <Button onPress={handleInputSubmit}/>   
            <Text>{response}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: { 
    }
})
