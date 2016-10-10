<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Discussion 2016/9/27 Tuesday](#discussion-2016927-tuesday)
	- [Single Variable Max](#single-variable-max)
	- [Multivariate Calculus](#multivariate-calculus)
		- [Partical derivatives](#partical-derivatives)
		- [Lagrangian, MAX = $F(x_1,x_2) +  \lambda G(x_1,x_2)$](#lagrangian-max-fx1x2-lambda-gx1x2)

<!-- /TOC -->

# Discussion 2016/9/27 Tuesday
- Office : 2nd floor of bunch.

## Single Variable Max
* first order      
$$ \frac {d}{dx} A* x^b = A*b*x^{b-1} $$
$$ \frac {d}{dx} f(g(x)) = f'(g(x)) * g'(x) $$

> Max of   $ln(15x) - 2x^2$, when $x \gt 0$     
> derivative  $\frac {1}{15x}  * 15  - 4x  = 0$    
> $\Rightarrow \frac {1}{x} = 4x$      
> $\Rightarrow x* =\frac{1}{2}$,  (**the critical point**)

* second order  $d^2 * \frac {f(x*)}{dx^2}$,     
 $\lt 0$, $x*$ is a max.    
 $\gt 0$, $x*$ is a min.    

> $\frac {d}{dx}(\cfrac {1}{x} - 4x) = 0 \Leftarrow\Rightarrow \frac {d^2}{dx^2}(ln(15x) - 2x^2) \Rightarrow -x^{-2}-4$, the answer is alway negative,      
therefore the critical point $x* = \frac{1}{2}$ is a maximum point.

## Multivariate Calculus   
$f(x_1, x_2) = (x_1)^3 + 8x_2$, such that $(x_1) + 2(x_2) = 10$    

###  Partical derivatives

* $\frac {\partial f(x_1, x_2)}{\partial x_1} = f$ everything that is **not $x_1$** is taken as a **constant**.      
> $\frac {\partial F}{\partial x_1} = 3(x_1)^2, \frac {\partial F}{\partial x_2} = 8$  

* second order

$\frac{\partial^2 F}{\partial x_1} * \partial x_2$ , cross partial
> $\frac{\partial^22 F}{\partial x_1^2} = (x_1^3)'' = (3(x_1)^2)' = 6x_1$     
> $\frac{\partial^2 F}{\partial (x_2)^2} = 8' = 0$

therefore, $\frac{\partial^2 F}{\partial x_1} * \partial x_2 = \frac {\partial ^ 2 F}{\partial x_2} * \partial x_1$      

* example:     
> $F(x_1,x_2) = (x_1)^{\frac{1}{2}} * (x_2)^{\frac{1}{2}}$    
> $\frac {\partial F}{\partial x_1} = (x_2)^{\frac{1}{2}} * \frac{1}{2} * (x_1)^{-\frac{1}{2}}$     

**to Find the Max $F(x_1,x_2)$, first order $\frac{\partial F}{\partial x_1} = \frac {\partial F}{\partial x_2} = 0$**.     

### Lagrangian, MAX = $F(x_1,x_2) +  \lambda G(x_1,x_2)$     
[$F(x)$ is the function we want to maximise, $G(x)$ is the conditions ]     
> $MAX(x_1,x_2)$ in **$F(x_1, x_2)$** $= (x_1)^3 + 8(x_2)$, such that **$G(x_1, x_2)$** $= (x_1) + 2(x_2) = 10$     

**Always take left hand side to right hand side**
> $(x_1)^3 + 8(x_2)$, such that $G(x) = 0$
> $max(x_1, x_2, \lambda):~Let~ L = (x_1)^3 + 8(x_2) +  \lambda[(10 - (x_1) - 2(x_2)]$       
> first order: **$\frac{\partial L}{\partial x_1}$** $= 3(x_1)^2 -  \lambda$, **$\frac{\partial L}{\partial x_2}$** $= 8 - 2\lambda$,  **$\frac{\partial L}{\partial \lambda}$** $= 10 - (x_1) - 2(x_2)$ [ Always $G(x_1, x_2)$].          
> to find the max, all these derivatives are zero.
