<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Chapter 3 Annuities](#chapter-3-annuities)
	- [3.1 introduction:](#31-introduction)
	- [3.2 Annuities - immediate, at the **end** of each payment period.](#32-annuities-immediate-at-the-end-of-each-payment-period)
	- [3.3 Annuities - due, at the **beginning** of each payment period.](#33-annuities-due-at-the-beginning-of-each-payment-period)
	- [3.4 Perpetuity, annuity with an **infinite** term.](#34-perpetuity-annuity-with-an-infinite-term)
	- [3.5 Deferred annuities and values on any date](#35-deferred-annuities-and-values-on-any-date)
	- [3.6 Outstanding loan balance](#36-outstanding-loan-balance)
	- [3.7 Non-level Annuities](#37-non-level-annuities)
	- [3.8 Annuities with payments in geometry progression:](#38-annuities-with-payments-in-geometry-progression)
	- [3.9 Annuities with payments in arithmetic progression:](#39-annuities-with-payments-in-arithmetic-progression)
	- [3.10 Yield rate](#310-yield-rate)
	- [3.11](#311)

<!-- /TOC -->

# Chapter 3 Annuities  

## 3.1 introduction:

* **Annuity** is the series of payments made at specified intervals for a fixed or continent period.     
	`e.g.` repayment of loan, or deposits to a retirement fund;     
* **Payment period** , the interval.         

## 3.2 Annuities - immediate,
`Pay at the **end** of each payment period, receive first payment at the end of first payment period.`     

* Basic annuity immediate lasting n period, with level payment 1.      
* The Present value of basic annuity immediate equals the sum of the present value of the $n$ end-of-period payments:     
$v(1) + v(2) + \ldots + v(n)$.  
<br/>  
  * when it is compound interest at an effective rate of $i$ per period,     
	$v(t) = (1+i)^{-t}= v^t$     
	therefore the sum is  $v+v^2+v^3+\ldots+v^n$.     
<br/>  
* Geomatric series:      
$c+cr+c^2+ \ldots +cr^{n-1} = \frac{c(1-r^n)}{1-r}$.     
&rarr; the present value of the basic annuuity-immediate lasting $n$ interest periods $v+v^2+v^3+\ldots+v^n=\frac{v(1-v^n)}{1-v}=\frac{1-v^n}{i}$.   
<br/>  
* Present value symbol a<sub>${\overline{n|}}i$</sub>.      
<br/>    
* Compound interest annual effective rate:     
a<sub>${\overline{n|}}i$</sub>$=v+v^2+v^3+\ldots+v^n=\frac{1-v^v}{i}$.   
<br/>   
* Final payment is S<sub>${\overline{n|}}i$</sub>, measure teh value $n$ period after, only for compound interst $a(t)=(1+i)^t$.  
<br/>  
* When $a(n)=(1+i)^n$, S<sub>${\overline{n|}}i$</sub>$=(1+i)^n$a<sub>${\overline{n|}}i$</sub>, and a<sub>${\overline{n|}}i$</sub> $=v^n$S<sub>${\overline{n|}}i$</sub>.     
<br/>  
* In General: S<sub>${\overline{n|}}i$</sub>$=a(n)$ a<sub>${\overline{n|}}i$</sub>, and a<sub>${\overline{n|}}i$</sub> $=v(n)$ S<sub>${\overline{n|}}i$</sub>.   
<br/>  
* S<sub>${\overline{n|}}i$</sub>$=\frac{(1+i)^n-1}{i}$     
<br/>  
* PMT ＝ FV／a<sub>${\overline{n|}}i$</sub>     
If future value (Loan)is to be repaid by n level end-of-period PMT, with effective interest rate for the payment period is $i$.

* PMT ＝ FV／S<sub>${\overline{n|}}i$</sub>    
If future value is to be accumulated by n level end-of-period PMT, with effective interest rate for the payment period is $i$.

* $i+1/$ S<sub>${\overline{n|}}i$</sub> $=1/$ a<sub>${\overline{n|}}i$</sub>

* Calculator, calculare without BGN on the top, meadnning the payment is given at the end of period. `See page p120`.     
  * I/Y, interest rate per year, nominal interest rate, as percentage;
  * P/Y, payments per year;     
  * C/Y, the number of interest conversion period per year.

## 3.3 Annuities - due     
`Pay at the **beginning** of each payment period.`

* ${\ddot  {a}}$ <sub>${\overline{n|}}i$</sub>, represents the value at (first payment time) that lasts $n$ periods.   (present value).
* ${\ddot  {S}}$ <sub>${\overline{n|}}i$</sub>, represents the value (at the end) that lasts $n$ periods.   
* ${\ddot  {S}}$ <sub>${\overline{n|}}i$</sub> $=(1+i)^n$ ${\ddot  {a}}$ <sub>${\overline{n|}}i$</sub>,
and ${\ddot  {a}}$ <sub>${\overline{n|}}i$</sub> $=v^n$ ${\ddot  {S}}$ <sub>${\overline{n|}}i$</sub>.     
<br/>  
* In General: ${\ddot  {S}}$ <sub>${\overline{n|}}i$</sub>$=a(n)$ ${\ddot  {a}}$<sub>${\overline{n|}}i$</sub>, and ${\ddot  {a}}$<sub>${\overline{n|}}i$</sub> $=v(n)$ ${\ddot  {S}}$ <sub>${\overline{n|}}i$</sub>.   
<br/>  
* Compound interest annual effective rate:     
${\ddot  {a}}$ <sub>${\overline{n|}}i$</sub>$=v+v^2+v^3+\ldots+v^n=\frac{1-v^v}{i}$.   
<br/>      
* $v+v^2+v^3+\ldots+v^{n-1}=\frac{1(1-v^n)}{1-v}=\frac{1-v^n}{d}$.       
* ${\ddot  {S}}$ <sub>${\overline{n|}}i$</sub>$=\frac{(1+i)^n-1}{d}$     
<br/>  
`note:`  
<br/>
* ${\ddot  {a}}$ <sub>${\overline{n|}}i$</sub> $=(1+i)$ a<sub>${\overline{n|}}i$</sub>     
${\ddot  {S}}$ <sub>${\overline{n|}}i$</sub> $=(1+i)$ S<sub>${\overline{n|}}i$</sub>      
* ${\ddot  {a}}$ <sub>${\overline{n|}}i$</sub> $=$ a<sub>${\overline{n-1|}}i$</sub> $+1$     
${\ddot  {a}}$ <sub>${\overline{n|}}i$</sub> $=$ a<sub>${\overline{n-1|}}i$</sub> $+1$


## 3.4 Perpetuity,
`annuity with an infinity term`.     
* infinite payment periods, ${\ddot  {a}}$ <sub>${\overline{∞|}}i$</sub> $=$ a<sub>${\overline{∞|}}i$</sub> $+1$    
* ${\ddot  {a}}$ <sub>${\overline{∞|}}i$</sub> $=\frac{1}{d}$     
* a<sub>${\overline{∞|}}i$</sub> $=\frac{1}{i}$
`example 3.5.7`

## 3.5 Deferred annuities and values on any date      
* A wait of more than one payment period for a payment. retrospective method     
*

## 3.6 Outstanding loan balance     
how to find loan balance at an intermediate date between the loan origination date and the date of the final payment.      
* Retropective method,
## 3.7 Non-level Annuities

---     
## 3.8 Annuities with payments in geometry progression:     

## 3.9 Annuities with payments in arithmetic progression:     

## 3.10 Yield rate     
