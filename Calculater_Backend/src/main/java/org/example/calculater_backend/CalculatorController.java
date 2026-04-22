package org.example.calculater_backend;

import net.objecthunter.exp4j.Expression;
import net.objecthunter.exp4j.ExpressionBuilder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", methods ={RequestMethod.GET, RequestMethod.POST} )
@RestController
@RequestMapping("/app")
public class CalculatorController {

    @PostMapping("/calculate")
    public String calculate(@RequestBody String formula){
        String calculate = formula;
        System.out.println(calculate);

        Expression expression = new ExpressionBuilder(calculate).build();
        return String.valueOf(expression.evaluate());

    }
}
