import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function Chat() {

    const [input,setInput] = useState("");



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
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
    }
})
