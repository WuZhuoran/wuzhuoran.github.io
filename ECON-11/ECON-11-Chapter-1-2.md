<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Preface](#preface)
- [Chapter 1](#chapter-1)
- [Chapter 2](#chapter-2)
	- [Profits](#profits)
		- [Derivates](#derivates)
		- [Function with several variable](#function-with-several-variable)
		- [Total Differential](#total-differential)
	- [Constrained Maximisation, **Lagrangian**](#constrained-maximisation-lagrangian)
		- [Example](#example)
		- [$\lambda$ - economic interpretation](#lambda-economic-interpretation)
	- [Implicit function theorem: $g(x, y) = 0$, how $x,y$ are related](#implicit-function-theorem-gx-y-0-how-xy-are-related)
	- [The Envelope theorem](#the-envelope-theorem)
	- [Homogeneous Functions](#homogeneous-functions)
	- [Euler's Theorem](#eulers-theorem)

<!-- /TOC -->

------

# Preface
* 2 midterms 	10/25, 11/17 in class, 1hr 15 mins,
* 1 final 		12/8 11:30-2:30
* problems set will be graded due in one week
* HW 10%
* 30/30/30, when final is lower than midterm
* 50% higher midterm, 40% final, when final is higher than midterm.

# Chapter 1
**Microeconomics, behavior of individual decision makers (consumers and firms).**
* Maximizing behaviours.
`e.g.` stay bed/go to class, bacon/cereals,

* Price elasticity / Income effect.
`e.g.` bus/car to school

* Price is not only the money you pay.  Psychological cost (do not want to risk/ waste time).
`e.g.` bank/parent loan/ investments (bonds, stocks)

* Marginal rate of substation. (cost of behavior), maximizing behavior.
`e.g.` listen to the lecture/doze off, history/econ/job


# Chapter 2
* Mathematics of optimisation.
* Why do we need to know?
* Consumers attempt to maximize their welfare/utility when making decision.
* Firms attempt to maximizing their profit when choosing input and outputs.


## Profits
$\pi$ = profits =  total revenue - total cost
total revenue = $p*q$, $p$ is the price and $q$ is the quantity.

### Derivates
`first order derivatives`
1. $$ f(x) = Q, ~ Q ~ is ~ a ~ constant, ~ derivatives = 0; $$

2. $$ f(x) = Q*x, ~ derivatives = a; $$

3. $$ f(x) = a*g(x),~derivatives = a ~ d ~ of ~  g(x); $$

4. $$ f(x) = x^b, ~ b ~ is ~ constant, ~ derivatives = b x^{(b-1)}; $$

5. $$ f(x) = a x^b = a g(x) ~ derivatives = a*b*x^{(b-1)}; $$

6. $$ f(x) = ln(x) ~ derivatives = \frac {1}{x}; $$
> $$ e = ruler's~number~ \approx ~ 2.72 $$
> $$ ln(e^{x}) = x $$
> $$ ln(e) =1 $$
> $$ ln(a*b) = ln(a) + ln(b) $$
> $$ ln(\frac {a}{b}) = ln(a) - ln(b) $$
> $$ ln(b^a) = a*ln(b) $$

7. $$ f(x) = a^x ~ derivatives = ln(a) * a^x; $$

8. $$ f(x) = e^x ~ derivatives = e^x; $$

9. $$ f(x) = g(x) + h(x) ~ derivatives = g'(x) + h'(x); $$

10. $$ f(x) = g(x) * h(x) ~ derivatives = g'(x)h(x) + h'(x)g(x); $$

11. $$ f(x) = \frac {g(x)}{h(x)} ~ derivatives = \frac {[g'(x)h(x) - h'(x)g(x)]} {g^{2}(x)}; $$

12. $$ f(x) = g[h(x)] ~ derivatives = \frac {dg}{dh} * \frac {dh}{dx} ~~~ chain ~ rule;$$

`second order derivatives`
* first order condition
max of a function with one variable, the derivative at that point is 0;
* second order condition
to make sure the critical point is the max ( second derivative is negative).
critical point is min when second derivative is positive.
* MAX: "mountain shape",  **concave**
* MIN: "smile face", **convex**

> $$ \pi = f(q) = 11q - 8 - q - q^2, ~ find ~ max: $$
1. write down
$$ f.o.c ~ \Rightarrow ~  f'(q) = 0:   $$
$$ f'(q) = 11 - 0 - 1 -2q = 10 - 2q $$
$~~~~~~~~~and ~ set$
$$ 10 - 2q = 0, ~ \rightarrow ~ q* = 5 $$
2. check s.o.c
$$ f''(q) \lt 0: $$
$$ f''(q) = - 2 \lt 0 $$
3. &there4; $f(q)$ is the maximum when $q = 5$.

### Function with several variable
* utility function

> x<sub>1</sub> = Food consumption, x<sub>2</sub> = Transportation, x<sub>3</sub> = Housing , ... , x<sub>n</sub> = leisure
> $$ U =f (x_1 , x_2 , x_3 , \cdots , x_n  )$$
> and real problem is to solve the max of U.
because of Budget constraint ( limited sources and unlimited wants).

> set  p<sub>1</sub> = price of x<sub>1</sub>,  p<sub>2</sub> x<sub>2</sub>,   p<sub>3</sub> x<sub>3</sub>  ... p<sub>n</sub> = Price Leisure
I = income
> $$ I = p_1x_1 + p_2x_2 + p_3x_3 +, \cdots, p_nx_n; $$

* $\rightarrow max ~ f(x_1, x_2, x_3, \ldots, x_n)$


`Partial derivatives`
> 1.
> \[
> f(x_1, x_2) = ax_1^2 + bx_1x_2 + cx_2^2 \\
> f'(x_1) = \frac {\partial f}{\partial x_1} = 2ax_1 + bx_2 \\
> f'(x_2) = \frac {\partial f}{\partial x_2} = bx_1 + 2cx_2 \\
> \]
> 2.
> \[
> f(x_1, x_2) = e^{ax_1 +bx_2} = g(h(x_1, x_2));\\
> \rightarrow g(h) = e^h, ~ h(x_1, x_2) = ax_1 +bx_2 \\
> f'(x_1) = (\frac{\partial f}{\partial h}) * (\frac{\partial h}{\partial x_1}) = a2^{ax_1+bx_2} \\
> f'(x_2) = (\frac{\partial f}{\partial h}) * (\frac{\partial h}{\partial x_2}) = b2^{ax_1+bx_2}
> \]
> 3.
> $$ \frac {[\partial(\cfrac{\partial f}{\partial x_1})]}{\partial x_2} = f_{ij} $$


### Total Differential
* consider $U=f(x_1,x_2,x_3, \cdots, x_n)$,
* how much f changes if all variable by a small amount $(dx_1, dx_2, dx_3, \ldots, dx_n)$
* $du = df = (\frac{\partial f}{\partial x_1}) * dx_1 + (\frac{\partial f}{\partial x_2}) * dx_2 + (\frac{\partial f}{\partial x_3}) * dx_3 + \ldots + (\frac{\partial f}{\partial x_n}) * dx_n$
* **first order conditions**, a necessary condition for a maximum (or a minimum ) of the function $f(x_1, x_2, x_3, \ldots, x_n)$), is that $du = 0$, for any combination of small changes in the $x's(dx_1, dx_2, dx_3, \ldots, dx_n)$
the only way for this to be true is if $f_1 = f_2 = f_3 = \ldots = f_n = 0;$

----

`Oct 4, 2016 Tuesday Lecture`
## Constrained Maximisation, **Lagrangian**

* $L(x)$ is the function we want to maximise, $G(x)$ is the conditions
* $max = L(x_1, x_2) + \lambda G(x_1, x_2)$
* λ is called a **Lagrangian multiplier**, often called **Lagrangian**
* Find the first order conditions of the new objective function L;
`assume the answer is max/min, what the question asks for, no need to check second order derivative. `

### Example
\[
c_1 = consumption ~ of ~ food, ~ c_2 = consumption ~ of ~ other ~ goods;\\
p_1 = the ~ price ~ of ~ c_1, ~ p_2 = the ~ price ~ of ~ c_2;\\
\rightarrow U = f(c_1, c_2) = 2ln(c_1) + (1-\alpha)ln(c_2), ~ 0 \lt \alpha \lt 1;
\]

> **Find the max** of
> $$ \alpha ln(c_1) + (1-\alpha)ln(c_2) $$
> under condition of
> $$ I = p_1c_1 + p_2c_2 $$

> \[
> I - p_1 * c_1- p_2 * c_2 = 0 \\
> L = 2ln(c_1) + (1-\alpha)ln(c_2) + \lambda(I - p_1 * c_1 + p_2 * c_2);\\
> \frac{\partial L}{\partial c_1} = \frac {\alpha}{c_1} - \lambda * p_1 = 0\\
> \frac{\partial L}{\partial c_2} = \frac {1- \alpha}{c_2} - \lambda * p_2 = 0\\
> \frac{\partial L}{\partial \lambda} = I - p_1 * c_1 + p_2 * c_2 = 0\\
> \rightarrow \\
> \frac {2}{c_1} = \lambda * p_2 \\
> \frac {1-\alpha}{c_2} = \lambda * p_2 \\
> I - p_1 * c_1 + p_2 * c_2 = 0\\
> Divided ~ both ~ side ~ \rightarrow \\
> \frac {c_1}{c_2} = \frac {1-\alpha}{\alpha} * \frac {p_1}{p_2};\\
> c_1^{ * } = \alpha \frac {I}{p_1}\\
> c_2^{ * } = (1-\alpha) \frac {I}{p_2}\\
> \lambda^{ * } = \frac {1}{I}\\
> if ~ p_1 ~ increases, ~ \alpha \frac {I}{p_1} \lt 0
> \]


### $\lambda$ - economic interpretation
meaning How much we can increase the objective function $f$ if the constraint is relaxed slightly.
* a HIGH value of $\lambda$ indicates that the utility could be increased substantially by relaxing the constraint (poor  people );
* a LOW value of $\lambda$ indicates that there  is not much to be gained by relaxing the constraint (rich people);
* $\lambda = 0$ implies that the constraint is not binding;

## Implicit function theorem: $g(x, y) = 0$, how $x,y$ are related
* total differential is $dg = 0$, how much the function changes
$$g_y dy + g_x dx = 0;$$
* we solve for $dy$ and divide by $dx$, we get the implicit derivate;
$$\rightarrow \frac{dy}{dx} = -\frac{g_x}{g_y}, ~ when ~ g_y ~ is ~ not ~ zero.$$
* conditions are always satisfied in this class.

## The Envelope theorem
$$ U = f(c_1, c_2, \alpha) = \alpha ln(c_1) + (1-\alpha)ln(c_2) + \lambda(I - p_1 * c_1+ p_2 * c_2);$$

* a formula to compute , at the optimum , the derivative of $U$ with respect to parameter in the maximisation problem:
$$ \frac {dU}{d\alpha} = f_{\alpha} $$

## Homogeneous Functions
called Homogeneous of degree K, if
$$ f(tx_1,tx_2,\cdots, tx_n) = t^{k} f(x_1, x_2, \cdots, x_n) $$

## Euler's Theorem
Special relationship between value of function and the partial derivatives of the function.
