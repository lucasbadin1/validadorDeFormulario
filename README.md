Esse projeto tem como intuito, realizar a validação do envio de um formulário, simulando a criação de um login!!

Foi possível aprofundar um pouco mais no tema de classes e realizar a inspeção do CPF informado, com base na regulamentação. 
Temos um exemplo a seguir, cujo cpf é: 705.484.450-52

Para confirmar se um CPF é válido (considerando que ele tenha 11 números), é preciso avaliar os seguintes pontos:

      1- PENÚLTIMO NÚMERO: 
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Penúltimo dígito)
Se o número digito for maior que 9, consideramos 0.

      2- ÚLTIMO NÚMERO: 
7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Último dígito)
Se o número digito for maior que 9, consideramos 0.
*/

