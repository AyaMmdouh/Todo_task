import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    header:{
        fontSize:23,
        color:"red",
        width:'100%',
        textAlign:"center",
        marginTop:50,
        fontWeight:"bold"
    },
    child:{
        padding:50, 
        alignItems:"center",
        display:"flex",
        flexDirection:"row"
    },
    input:{
        borderBottomColor:"gray",
        borderBottomWidth:2,
        padding:15,
        color:"blue",
        marginRight:15,
        borderColor:"red",
        borderRadius:5
    },
    btn:{
        width:"150",
        borderRadius:10,
        padding:3,
        borderColor:"white"
    },
    img:{
        alignItems:"center"
    },
    action:{
        padding:50, 
        alignContent:"center",
        display:"flex",
        flexDirection:"row",
        margin:10,
    },
    btns:{
        width:"50",
        marginTop:10,
    }
});

export default styles;