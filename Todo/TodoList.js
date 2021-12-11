import React, { useEffect, useState } from "react";
import Checkbox from "expo-checkbox";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";

const TodoList = ({ todos }) => {
    const [itemsCompleted, setItemsComplested] = useState(0);
    let l = 0;
    const handCheckbox = (item) => {
        if (itemsCompleted !== 0) {
            setItemsComplested(itemsCompleted - 1);
        }
        todos.map((todo, index) => {
            if (todo === item) {
                todos.splice(index, 1);
                item.done = true;
            }
        })
    }
    useEffect(() => {
        if(todos.length!==0){
             setItemsComplested(itemsCompleted+1);
        }
    }, [todos]);

    return (
        <FlatList
            style={{ height: "100%" }}
            data={todos}
            renderItem={({ item }) => {
                return (
                    <View style={styles.item}>
                        <Text style={item.done ? styles.itemChecked : {}}> Title: </Text>
                        <Text style={item.done ? styles.itemChecked : {}}> {item.title} </Text>
                        <Checkbox value={item.done} onChange={() => handCheckbox(item)} />
                    </View>
                );
            }}
            ListHeaderComponent={() => <Text style={styles.listHeader}>My todos {itemsCompleted} remaining of {todos.length}</Text>}
            ListFooterComponent={() => <Text style={styles.listHeader}>End of Todos</Text>}
            ListEmptyComponent={() => <Text style={{ fontSize: 23, color: "gray", padding: 10, margin: 4 }}>no todos today </Text>}
            ItemSeparatorComponent={() => <View style={styles.seperator}></View>}

        />
    )
};
export default TodoList;
