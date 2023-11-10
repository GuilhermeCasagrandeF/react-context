import { useContext, useState } from "react";
import { createContext } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = 'Carrinho';

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    const {carrinho, setCarrinho} = useContext(CarrinhoContext);

    function mudarQuantidade(id, quantidade) {
        return carrinho.map(itemDoCarrinho => {
            if(itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
            return itemDoCarrinho;
        })
    }

    function adicionarProduto(novoProduto){
        const existeProduto = carrinho.some(itemDoCarrinho => itemDoCarrinho.id === novoProduto.id);
    
        if(!existeProduto){
            novoProduto.quantidade = 1;
            return setCarrinho(carrinhoAnterior => [...carrinhoAnterior, novoProduto])
        }
    
        setCarrinho(mudarQuantidade(novoProduto.id, 1));
    
    }

    function removerProduto(id) {
        const produto = carrinho.find(itemDoCarrinho => itemDoCarrinho.id === id);
        const quantideUm = produto.quantidade === 1;

        if(quantideUm){
            return setCarrinho(carrinhoAnterior => carrinhoAnterior.filter(itemDoCarrinho => itemDoCarrinho.id !== id)); //Remove o item do carrinho
        }

        // Diminui a quantidade
        setCarrinho(mudarQuantidade(id, -1));
    }

    return {carrinho, setCarrinho, adicionarProduto, removerProduto} //Retorna as propriedades e funções para serem utilizadas onde o contexto for instanciado
}