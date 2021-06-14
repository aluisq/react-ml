import React from 'react'
import Card from '../components/Card/card'
import Navbar from '../components/Navbar/navbar'

export default function Models(){

        return (
            <>
            <Navbar/>
            <div className="models responsive">
                <div className="models-content">
                    <Card
                    imageUrl="https://www.luisotavio.pro/images/post_principal/segmentacao_clientes.jpg"
                    title="K-means"
                    body="O K-Means é um algoritmo de Machine Learning baseado em aprendizado 
                            não supervisionado que tem o objetivo de tentar encontrar similaridades entre os 
                            dados e os agrupa conforme a quantidade de clusters (K).
                            "
                    color="#AFB2B1"
                    textBtn="Verificar!"
                    rota="/ml/kmeans"
                    />
                    <Card
                    imageUrl="https://miro.medium.com/max/1628/0*Zb-wNzP2nGIqyrq7.jpg"
                    title="Regressão Linear"
                    body="A regressão linear é um dos algoritmos de aprendizado supervisionado mais simples.
                            O fato é que regressões lineares continua a ser um método comum e útil de fazer
                            previsões quando o vetor alvo é um valor quantitativo como preço de casa, idade...
                            "
                    color="#AFB2B1"
                    textBtn="Verificar!"
                    rota="/ml/lr"
                    />
                    
                </div>
            </div>
            </>
        )
}
