import styled from "styled-components/native";


export const Wrapper = styled.SafeAreaView`
   background: #000;
   flex:1;
`

export const Container = styled.ScrollView`
 
`

export const Header = styled.View`
 flex-direction: row;
 align-items: center;
 padding: 15px;
`

export const SearchInput = styled.TextInput.attrs(()=>({
    placeholderTextColor: '#999'
}))`
  background: #222;
  border: 1px solid #888;
  border-radius: 25px;
  flex: 1;
  height: 42px;
  color: #ddd;
  padding: 0 20px;
  font-size: 16px;
  margin-left: 10px;
` 