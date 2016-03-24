/**
 * Created by AlvaroBelmonte on 20/03/2016.
 */
angular.module('App', [])
    .controller('myCtrl', [function(){

        var cambio =[
            {"euro": 1, "dolar": 1.2, "libra": 0.71},
            {"euro": 0.83, "dolar": 1, "libra": 0.59},
            {"euro": 1.4, "dolar": 1.68, "libra": 1}
        ];

        var self = this;
        self.valorOrigen = 1;


        self.change = function(){
            var destino = self.monedaDestino;
            if(self.monedaOrigen == 'euro'){
                if(destino == 'euro')
                    self.valorDestino = self.valorOrigen * cambio[0].euro;
                else if(destino == 'dolar')
                    self.valorDestino = self.valorOrigen * cambio[0].dolar;
                else if(destino == 'libra')
                    self.valorDestino = self.valorOrigen * cambio[0].libra;
            }
            else if(self.monedaOrigen == 'dolar'){
                if(destino == 'euro')
                    self.valorDestino = self.valorOrigen * cambio[1].euro;
                else if(destino == 'dolar')
                    self.valorDestino = self.valorOrigen * cambio[1].dolar;
                else if(destino == 'libra')
                    self.valorDestino = self.valorOrigen * cambio[1].libra;
            }
            else if(self.monedaOrigen == 'libra'){
                if(destino == 'euro')
                    self.valorDestino = self.valorOrigen * cambio[2].euro;
                else if(destino == 'dolar')
                    self.valorDestino = self.valorOrigen * cambio[2].dolar;
                else if(destino == 'libra')
                    self.valorDestino = self.valorOrigen * cambio[2].libra;
            }
        };

    }]);



