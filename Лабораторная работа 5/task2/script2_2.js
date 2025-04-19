let num = '12345', b = 1, a;
for (let i=0; i<num.length; i++)
{
 a = Number(num[i]);
 b*=num[i];
}
alert(b);