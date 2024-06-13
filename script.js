const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um juiz na assembleia legislativa sendo convencido que precisa aprovar uma, lei aonde adolecentes a partir dos 16 anos poderão tirar uma habilitação provisória, qual seria o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Nunca irei aprovar essa lei!",
                afirmacao: "afirmação"
            },
            {
                texto: "Até que enfim, uma lei que irei ter o prazer de aprovar!" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "Então os deputados da assembleia começam seus discursos, para aprovação do projeto, você escuta todos os armuntos a favor do projeto, como voce procederia?",
        alternativas: [
            {
                texto: "Você procede a sessão na ssembleia sem questionar nenhum fato.",
                afirmacao: "afirmação"
            },
            {
                texto: "Questiona alguns argumentos dos deputados á favor desse projeto para esclerecer melhor como o projrto irá funcionar.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quando tudo é esclarecido, com os deputados á favor do projeto, começam os deputados da oposição que apresentam seus argumentos, você acaba escutando um argumento que é considerado uma fake news, como você resolve essa situação?",
        alternativas: [
            {
                texto: "Finge que desconhece o fato de que aqule deputado apresentou uma fake news e cuntinua a sessão sem nenhuma interrupção",
                afirmacao: "afirmação"
            },
            {
                texto: "Para a sessão para corrigir o deputado para que a sessão possa prosseguir normalmente e com fatos que podem ser comprovados e serem verdadeiros",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Ao final de todos os depuatdos, você como juiz abre a votação para os deputados, porém é supreendido com um empate pois um deputado não compareceu o que deixou o plenário em um número par, e você so teria duas opções ou você mesmo desempatar, ou adiaressa sessãoi para outro dia, o que você escolheria?",
        alternativas: [
            {
                texto: "Você adia aquela sesão",
                afirmacao: "afirmação"
            },
            {
                texto: "Você mesmo desempata",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Caso vocêtenha escolhido desempatar, qual seria o seu veredito?",
        alternativas: [
            {
                texto: "Aprovaria a lei",
                afirmacao: "afirmação"
            },
            {
                texto:"Não aprovaria a lei",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal +=afirmacoes + " ";
    atual++; 
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049 a lei do adolecente que vira piloto iria ser ou não posta em vigor.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " fim";
}

mostraPergunta();
