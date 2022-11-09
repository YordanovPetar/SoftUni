    function printTradeComission(input) {
        let town = input[0];
        let salesVolume = Number(input[1]);

        let comission = 0;

        if (town === "Sofia") {
            if (salesVolume >= 0 && salesVolume <= 500) comission = 0.05;
            else if (salesVolume > 500 && salesVolume <= 1000) comission = 0.07;
            else if (salesVolume > 1000 && salesVolume <= 10000) comission = 0.08;
            else if (salesVolume > 10000) comission = 0.12;
        } else if (town === "Varna") {
            if (salesVolume >= 0 && salesVolume <= 500) comission = 0.045;
            else if (salesVolume > 500 && salesVolume <= 1000) comission = 0.075;
            else if (salesVolume > 1000 && salesVolume <= 10000) comission = 0.10;
            else if (salesVolume > 10000) comission = 0.13;
        } else if (town === "Plovdiv") {
            if (salesVolume >= 0 && salesVolume <= 500) comission = 0.055;
            else if (salesVolume > 500 && salesVolume <= 1000) comission = 0.08;
            else if (salesVolume > 1000 && salesVolume <= 10000) comission = 0.12;
            else if (salesVolume > 10000) comission = 0.145; 
        }

        let finalTradeCosts = salesVolume * comission;

        comission === 0 ? console.log("error") : console.log(finalTradeCosts.toFixed(2));
    }

printTradeComission(["Varna", "3874.50"]);