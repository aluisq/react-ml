import React from 'react'
import Navbar from '../components/Navbar/navbar'
import lr from '../img/reg.png'

export default function Lr() {
    return (
        <>
        <Navbar/>
        <div className="lr">
            <h3># Regressão Linear</h3>
            <h6> Os dados utilizados para essa análise são de JAN-2015 a JAN-2021, foram mais de 50 mil registros. E com eles foi possível fazer uma regressão linear e estimar quanto teríamos de motos envolvidas em acidentes num determinado bairro caso um dado valor de automóveis fosse fornecido.
            E o dataset utilizado para essa análise pode ser encontrado no link a seguir <a target="_blank" href="http://dados.recife.pe.gov.br/it/dataset/acidentes-de-transito-com-e-sem-vitimas">http://dados.recife.pe.gov.br/it/dataset/acidentes-de-transito-com-e-sem-vitimas</a></h6>
            <div className="lr-content">
            <img src={lr} alt="regressao_linear" />
            <p>
                Para essa regressão apenas 80% dos dados foram treinandos para o modelo e os outros 20% estão plotados no gráfico ao lado para realização dos teste de como o modelo se comporta,
                e nela encontrasse a reta da regressão que possui a função: <strong>Y = 0.1265*X + 50.38</strong>. Ou seja, numa situação hipotética, se um bairro
                fosse acrescentado nos registro e ele tivesse 900 carros envolvidos em acidentes de 2015 a 2021, teríamos em média o valor de 164 motos.
                <br />
                <br />
                Utilizando a biblioteca do Python, sklearn, foi usado o r2_score para calcular o R2, onde recebe o vetor de valores do y_test(dados reais) e o vetor de valores estimados o y_pred, oriundos do x_test e apartir do comando
                r2_score(y_test,y_pred) é possível calcular o <strong>R2: 0.8473</strong> onde quanto mais próximo de um melhor...
            </p>
            </div>
        </div>
        </>
    )
}
