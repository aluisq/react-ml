import React from 'react'
import Navbar from '../components/Navbar/navbar'
import FormModel from '../components/FormModel/formModel'
import auto from '../img/auto.png'
import moto from '../img/moto.png'
import Card from '../components/Card/card'



export default function Kmeans() {

    const json_data = {"0": ["ALTO DO MANDU", "ALTO JOSÉ BONIFÁCIO", "ALTO JOSÉ DO PINHO", "ALTO SANTA TERESINHA", "APIPUCOS", "BOMBA DO HEMETERIO",
        "BOMBA DO HEMETÉRIO", "BRASÍLIA TEIMOSA", "BREJO DA GUABIRABA", "BREJO DE BEBERIBE", "CABANGA", "CAJUEIRO", "CAMPINA DO BARRETO", "CAÇOTE",
        "CIDADE UNIVERSITÁRIA", "COELHOS", "COHAB", "COQUEIRAL", "CURADO", "CÓRREGO DO JENIPAPO", "DOIS IRMÃOS", "DOIS UNIDOS", "ENGENHO DO MEIO", "FUNDÃO", "GUABIRABA", "HIPÓDROMO",
        "ILHA JOANA BEZERRA", "JAQUEIRA", "JIQUIÁ", "JOANA BEZERRA", "LINHA DO TIRO", "MANGABEIRA", "MANGUEIRA", "MONTEIRO", "MORRO DA CONCEIÇÃO", "MUSTARDINHA", "NOVA DESCOBERTA", "PASSARINHO",
        "PONTO DE PARADA", "PORTO DA MADEIRA", "POÇO DA PANELA", "SANCHO", "SANTANA", "SETUBAL", "SOLEDADE", "SÍTIO DOS PINTOS", "TORREÃO", "TOTÓ", "VASCO DA GAMA", "ZUMBI"],
        "1": ["AFLITOS", "ARRUDA", "BAIRRO DO RECIFE", "BARRO", "BEBERIBE", "BONGI", "CAMPO GRANDE", "ENCRUZILHADA", "ESTÂNCIA", "ILHA DO LEITE", "ILHA DO RETIRO", 
        "IPUTINGA", "JARDIM SÃO PAULO", "JORDÃO", "MACAXEIRA", "PAISSANDU", "PARNAMIRIM", "PRADO", "ROSARINHO", "SAN MARTIN", "SANTO ANTÔNIO", "TAMARINEIRA", "TEJIPIÓ", "TORRÕES", "ÁGUA FRIA"],
        "2": ["BOA VIAGEM"], 
        "3": ["AFOGADOS", "BOA VISTA", "DERBY", "IMBIRIBEIRA", "MADALENA", "SANTO AMARO"], 
        "4": ["AREIAS", "CASA AMARELA", "CASA FORTE", "CAXANGÁ", "CORDEIRO", "ESPINHEIRO", "GRAÇAS", "IBURA", "IPSEP", "PINA", "SÃO JOSÉ", "TORRE", "VÁRZEA"]}



    // console.log("AUTO", json_data);
    // console.log("MOTO" ,json_moto);


    return (
        <>
        <Navbar/>
        <div className="kmeans">
            <h3>
            #Interpretação K-means
            </h3>
            <h6>
            Os dados utilizados para essa análise são de JAN-2015 a JAN-2021, foram mais de 50 mil registros. E com eles foi possível fazer um agrupamento dos bairros para automóveis e para motos, dois meios de transporte bastante comuns na cidade do Recife.
            E o dataset utilizado para essa análise pode ser encontrado no link a seguir <a target="_blank" href="http://dados.recife.pe.gov.br/it/dataset/acidentes-de-transito-com-e-sem-vitimas">http://dados.recife.pe.gov.br/it/dataset/acidentes-de-transito-com-e-sem-vitimas</a>
            </h6>
            <div className="kmeans-content">
            <img src={auto} alt="perfil" />
            
            <span>
                Nessa análise foi feito o agrupamento de bairros de acordo com as quantidades de automóveis e motocicletas envolvidas nos acidentes, totalizando 95 bairros.
                No gráfico ao lado é possível verificar esses agrupamentos que são separados de acordo com aproximidade de cada Centroid(pontos vermelhos):
                <ul>
                    <li id='liauto1'><text>Preto:</text> {json_data[2].join(', ')}</li>
                    <li id='liauto2' ><text>Verde:</text> {json_data[3].join(', ')}</li>
                    <li id='liauto3'> <text>Amarelo:</text> {json_data[4].join(', ')}</li>
                    <li id='liauto4'> <text>Azul:</text> {json_data[1].join(', ')}</li>
                    <li id='liauto5'> <text>Roxo:</text> {json_data[0].join(', ')}</li>
                </ul>
                Detalhe é que o ponto que indica o bairro de Boa Viagem está bem abaixo do Centroid superior na extrema direita
            </span>

            </div>
        </div>
        </>
    )
}
