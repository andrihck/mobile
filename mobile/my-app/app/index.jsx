import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";

const style = StyleSheet.create({
    input: {
        width: '100%',
        margin: 5,
        backgroundColor: '#799fbf',
        borderRadius: '15px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 5
        
    },
    container: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#799fbf',
        flex: 1
    },

    button:{
        justifyContent: 'center',
        margin:15,
        alignItems:'center',
        color:'grey',
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: 'black',
        borderRadius: 15
    },
    titulo:{
        fontSize: 49,
        fontFamily: 'Times New Roman',
        fontWeight:'760',

    },
    box:{
        shadowOpacity: 0.30,  
        shadowRadius: 9, 
        padding: 50,
        backgroundColor:'white',
        justifyContent: 'center',
    
       },

       botaotexto:{
        color:'white',
        alignItems:'center',
        justifyContent:'center'
       }

})

export default SinUp = () => {
    //const email = ''

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    const registrarUsuario = async function () {
        if (!nome || !email || !senha) {
            console.log('os parametros nome, email e senha devem ser fornecidos')
            return
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
            body: JSON.stringify({ name: nome, email: email, password: senha })
        })
        
    if (!resposta) {
        console.log('erro')
    } else if (resposta.status == 200) {
        console.log('user criado com sucesso')
    } else {
        console.log('ocorreu um erro')
    }
}

return (
    <SafeAreaView style={style.container}>
        <View style={style.box}>
        <View >
            <Text style={style.titulo}>Registre-se</Text>
        </View>
        <View style={style.inputView}>
            <TextInput
                style={style.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Digite seu email zika"
            />
            <TextInput
                style={style.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder="Seu nome animal"
            /><TextInput
                style={style.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Sua senha segura"
                secureTextEntry={true}
            />

            <View style={style.button} >
                <Pressable onPress={registrarUsuario}>
                    <Text style={style.botaotexto}>Cadastrar</Text>
                </Pressable>
            </View>
</View>
        </View>
    </SafeAreaView>

)
}