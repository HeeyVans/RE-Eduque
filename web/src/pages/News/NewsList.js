import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './Newsitem'
import './newsitem.css'

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=%22meio%20ambiente%22&apiKey=97458584d3144b8e9075676399a241f5');
            console.log(response);
            setArticles(response.data.articles);
        }
        getArticles();
    }, [])

    // return (
    //     <div className='container-news'>
    //         {articles.map(article => {
    //             return (
    //                 <NewsItem
    //                     title={article.title}
    //                     description={article.description}
    //                     url={article.url}
    //                     urlToImage={article.urlToImage}
    //                 />
    //             );
    //         })}
    //     </div>
    // );

    return (
        <div className='container-news'>
                <NewsItem
                    title={'Ratinho Junior usa indenização ambiental bilionária para agradar agronegócio e pavimentar reeleição'}
                    description={'Governador do Paraná já começou a torrar parte da bolada de R$ 1,39 bilhão paga pela Petrobras comprando caminhões para prefeitos. The post Ratinho Junior usa indenização ambiental bilionária para agradar agronegócio e pavimentar reeleição appeared first on …'}
                    url={'https://theintercept.com/2022/05/23/ratinho-junior-indenizacao-ambiental-bilionaria-petrobras-rio-iguacu-parana/'}
                    urlToImage={'https://theintercept.com/wp-uploads/sites/1/2022/05/19986639-redes1.jpg'}
                />
                <NewsItem
                    title={'Governo do Caboja pede que turistas parem de colher planta pênis'}
                    description={'O governo do Camboja lançou neste mês (11) um apelo aos turistas para que parem de colher uma planta carnívora rara – que tem o formato de pênis humano – uma vez que a espécie se encontra em risco de extinção. "Obrigado por amar os recursos naturais, mas não …'}
                    url={'https://www.tecmundo.com.br/ciencia/239484-governo-caboja-pede-turistas-parem-colher-planta-penis.htm'}
                    urlToImage={'https://tm.ibxk.com.br/2022/05/30/30150320727325.jpg'}
                />
                <NewsItem
                    title={'Fonte de orgulho nacional, INPE luta para sobreviver'}
                    description={'Cortes orçamentários, fuga de cérebros e ataques políticos desmoralizam um ícone da ciência sul-americana'}
                    url={'https://www.science.org/content/article/fonte-de-orgulho-nacional-inpe-luta-para-sobreviver'}
                    urlToImage={'https://www.science.org/do/10.1126/science.add2164/abs/_20220527_nf_preview.jpg'}
                />
                <NewsItem
                    title={'Carta ao Leitor: Palanque sem ideias'}
                    description={'Candidatos apresentam discursos demagógicos, promessas vagas e platitudes sobre os mais variados assuntos, das contas públicas ao meio ambiente'}
                    url={'https://veja.abril.com.br/politica/carta-ao-leitor-palanque-sem-ideias/'}
                    urlToImage={'https://veja.abril.com.br/wp-content/uploads/2022/05/DEBATE-ELEICOES-1989-02.jpg.jpg?quality=70&strip=info&w=680&h=453&crop=1'}
                />
                <NewsItem
                    title={'Hyundai assume compromisso para atingir a neutralidade carbónica até 2045'}
                    description={'A Hyundai enquanto fabricante automóvel e uma das mais relevantes empresas do setor tem vindo a revelar a sua preocupação na luta pela criação de soluções em prol do meio ambiente. É neste contexto...'}
                    url={'https://pplware.sapo.pt/motores/hyundai-assume-compromisso-para-atingir-a-neutralidade-carbonica-ate-2045/'}
                    urlToImage={'https://pplware.sapo.pt/wp-content/uploads/2022/05/Hyundai-Motor.jpg'}
                />
                <NewsItem
                    title={'Japão aprova liberação de água radioativa da usina de Fukushima no mar'}
                    description={'O regulador nuclear do Japão aprovou os planos da operadora da usina nuclear de Fukushima sobre liberar as águas residuais radioativas no mar. O líquido será tratado e, segundo autoridades locais, não oferecerá nenhum perigo a população e ao meio ambiente.  O…'}
                    url={'https://olhardigital.com.br/2022/05/18/ciencia-e-espaco/japao-aprova-liberacao-de-agua-radioativa-da-usina-de-fukushima-no-mar/'}
                    urlToImage={'https://img.olhardigital.com.br/wp-content/uploads/2021/04/Tanques-de-Agua.jpg'}
                />
                <NewsItem
                    title={'Os rituais de beleza milenares que estão voltando à moda'}
                    description={'A demanda pela sabedoria milenar vem crescendo — e essas práticas estão ajudando as pessoas a viver de forma mais consciente em relação à sua própria saúde e ao meio ambiente.'}
                    url={'https://www.bbc.com/portuguese/vert-cul-61272524'}
                    urlToImage={'https://ichef.bbci.co.uk/news/1024/branded_portuguese/17B8E/production/_124366179_p0bzqpc4_1.jpg'}
                />
                <NewsItem
                    title={'Nova enzima que decompõe plásticos em horas pode limpar lixões'}
                    description={'Um novo tipo de enzima criada por engenheiros e cientistas da Universidade do Texas em Austin (Estados Unidos) mostrou-se capaz de quebrar os componentes químicos de plásticos em horas ou dias, representando a resolução de um importante desafio ecológico para…'}
                    url={'https://www.tecmundo.com.br/ciencia/238093-nova-enzima-decompoe-plasticos-horas-limpar-lixoes.htm'}
                    urlToImage={'https://tm.ibxk.com.br/2022/05/02/02153903881373.jpg'}
                />
                <NewsItem
                    title={'Apple é acusada de apoiar grupos contra sustentabilidade'}
                    description={'Como qualquer grande empresa que se preze, o compromisso da Apple com o meio ambiente e a sustentabilidade das suas operações é público e notório — basta ver a página que a empresa mantém no seu site apenas para esse aspecto e todas as iniciativas que tem rea…'}
                    url={'https://macmagazine.com.br/post/2022/06/01/apple-e-acusada-de-apoiar-grupos-contra-sustentabilidade/'}
                    urlToImage={'https://macmagazine.com.br/wp-content/uploads/2017/04/20-apple_park.jpg'}
                />
                <NewsItem
                    title={'iFood vai dar US$ 6 milhões a quem criar embalagem circular para delivery'}
                    description={'Em parceria com Xprize, a empresa vai arrecadar US$ 20 milhões para realizar concurso de pesquisa sobre embalagens sustentáveis iFood vai dar US$ 6 milhões a quem criar embalagem circular para delivery'}
                    url={'https://tecnoblog.net/noticias/2022/05/18/ifood-vai-dar-us-6-milhoes-para-quem-criar-embalagem-circular-para-delivery/'}
                    urlToImage={'https://files.tecnoblog.net/wp-content/uploads/2020/08/ifood.jpg'}
                />
                <NewsItem
                    title={'iFood lança moto elétrica para entregadores por R$ 10 mil'}
                    description={'O iFood lançou nesta terça-feira (31) a EVS Work, uma moto elétrica que será voltada para entregadores da plataforma. Produzida em parceria com a montadora brasileira Voltz, o veículo custa R$ 9.999,90 na pré-venda e surge com a promessa de ser uma alternativ…'}
                    url={'https://www.tecmundo.com.br/mobilidade-urbana-smart-cities/239555-ifood-lanca-moto-eletrica-entregadores-r-10-mil.htm'}
                    urlToImage={'https://tm.ibxk.com.br/2022/05/31/31152601602360.jpg'}
                />
                <NewsItem
                    title={'Novas tecnologias resgatam lugar histórico da madeira na construção civil'}
                    description={'Crescente preocupação com o meio ambiente tem levado as árvores a retomar seu papel no setor, sustentando, inclusive, prédios altos e vistosos'}
                    url={'https://veja.abril.com.br/comportamento/novas-tecnologias-resgatam-lugar-historico-da-madeira-na-construcao-civil/'}
                    urlToImage={'https://veja.abril.com.br/wp-content/uploads/2022/05/NORWAY-MJOSTÅRNET-BRUMUNDALL-1_.jpg-1.jpg?quality=70&strip=info'}
                />
                <NewsItem
                    title={'Lenovo cria programa que compensa carbono de PCs no Brasil (e o que é isso)'}
                    description={'Programa Lenovo CO2 Offset Service compensa emissão de carbono de PCs ThinkPad, Legion e Yoga; iniciativa acaba de chegar ao Brasil Lenovo cria programa que compensa carbono de PCs no Brasil (e o que é isso)'}
                    url={'https://tecnoblog.net/noticias/2022/05/09/lenovo-cria-programa-que-compensa-carbono-de-pcs-no-brasil-e-o-que-e-isso/'}
                    urlToImage={'https://files.tecnoblog.net/wp-content/uploads/2022/04/novo-lenovo-legion-5-2-700x549.jpg'}
                />
                <NewsItem
                    title={'União Europeia vai proibir a venda de carros a gasolina e gasóleo já a partir de 2035'}
                    description={'O cenário tem sido similar em muitos países, com a procura do fim dos motores a gasolina e a gasóleo. Este é um passo essencial e que muitos já tomam como certo num futuro...'}
                    url={'https://pplware.sapo.pt/motores/uniao-europeia-vai-proibir-a-venda-de-carros-a-gasolina-e-gasoleo-ja-a-partir-de-2035/'}
                    urlToImage={'https://pplware.sapo.pt/wp-content/uploads/2022/05/gasoilna_gasoleo_1.jpg'}
                />
                <NewsItem
                    title={'No coração do agronegócio, Marcelo Borges uniu jovens pela preservação do meio ambiente'}
                    description={'O grupo concluiu que o melhor era desenvolver as práticas dentro de casa, com ações relacionadas ao lixo, à plantação e ao cuidado com a terra — tudo no quintal ou na varanda de cada voluntário. Ness… [+1325 chars]'}
                    url={'https://www.uol.com.br/ecoa/reportagens-especiais/causadores-marcelo-borges/'}
                    urlToImage={'https://conteudo.imguol.com.br/c/entretenimento/8e/2022/05/27/folhas-que-mudam-1653669624217_v2_615x300.png'}
                />
                <NewsItem
                    title={'Wikipedia não vai mais aceitar doações em criptomoedas em prol do meio ambiente'}
                    description={'A Wikimedia Foundation, criadora da maior e mais famosa enciclopédia online, a Wikipédia, deixará de aceitar doações em criptomoedas a partir desta semana. A razão disso são as preocupações crescentes e os debates em relação ao impacto ambiental do uso de cri…'}
                    url={'https://canaltech.com.br/internet/wikipedia-nao-vai-mais-aceitar-doacoes-em-criptomoedas-em-prol-do-meio-ambiente-215337/'}
                    urlToImage={'https://t.ctcdn.com.br/Cr6bfRwWknoRdnfPXSvVQ9IKXa0=/1400x788/smart/i328156.jpeg'}
                />
                <NewsItem
                    title={'Na Amazónia, as redes têm cada vez menos peixe: “O nosso principal rendimento está acabando”'}
                    description={'As seculares fachadas de azulejos portugueses no Centro Histórico de São Luís, Património Cultural da Humanidade, encantam turistas do mundo inteiro. Mas a capital do Maranhão é também ponto de conve… [+5216 chars]'}
                    url={'https://www.publico.pt/2022/05/20/p3/fotogaleria/na-amazonia-redes-tem-cada-vez-menos-peixe-o-nosso-principal-rendimento-esta-acabando-408122'}
                    urlToImage={'https://imagens.publico.pt/imagens.aspx/780199?tp=KM&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_P3.png'}
                />
                <NewsItem
                    title={'OMS alerta que indústria do tabaco tem um impacto “desastroso” no meio ambiente'}
                    description={'A OMS indica que a indústria do tabaco é uma das "maiores poluidoras" que conhecemos, responsável pela perda de 600 milhões de árvores e por emitir cerca de 84 milhões de toneladas de CO2.'}
                    url={'https://observador.pt/2022/05/31/oms-alerta-que-industria-do-tabaco-tem-um-impacto-desastroso-no-meio-ambiente/'}
                    urlToImage={'https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1126%3Anowe%3A0%3A71%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2Fsites%2F5%2F2015%2F04%2F18024483.jpg'}
                />
                <NewsItem
                    title={'Governo cria mercado de carbono com ‘agrado’ ao agro'}
                    description={'Minuta de texto ainda não oficial de decreto sobre mercado de carbono no Brasil engloba nove setores, como mineração e agricultura, mas não cita florestas Matéria exclusiva para assinantes. Para ter acesso completo, acesse o link da matéria e faça o seu cadas…'}
                    url={'https://valor.globo.com/brasil/noticia/2022/05/19/governo-cria-mercado-de-carbono-com-agrado-ao-agro.ghtml'}
                    urlToImage={'https://s2.glbimg.com/9EYpZ2eDWHuuLPAJ_x55YF6Y6RI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2022/a/8/iQNyKJTM2B5YfBbJIOLw/foto19esp-101-leite-a16.jpg'}
                />
                <NewsItem
                    title={'Resolução do Conama é constitucional, mas precisa ser alterada'}
                    description={'Embora a Resolução do Conselho Nacional do Meio Ambiente (Conama) 491/2018 seja constitucional, ela deve passar por adequações para que cumpra a sua função de proteger a saúde da população, assim como o meio ambiente. Tais alterações devem ocorrer em um prazo…'}
                    url={'https://www.conjur.com.br/2022-mai-05/resolucao-conama-constitucional-alterada'}
                    urlToImage={'https://s.conjur.com.br/img/b/poluicao1.jpeg'}
                />
        </div>
    );
}

export default NewsList;