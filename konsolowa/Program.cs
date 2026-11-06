using System;
using System.Net;

class CustomArray
{
    private int[] table;
    private int size;

    /*********************************************
    nazwa metody: CustomArray (Konstruktor)
    opis metody: Inicjalizuje tablicę o zadanym rozmiarze i wypełnia ją losowymi liczbami z przedziału od 1 do 1000.
    parametry: size - rozmiar tworzonej tablicy
    zwracany typ i opis: brak
    autor: dawidtrynkiewicz
    ***********************************************/
    public CustomArray(int size)
    {
        this.size = size;
        this.table = new int[size];
        Random rand = new Random();
        for (int i = 0; i < this.size; i++)
        {
            this.table[i] = rand.Next(1, 1001);
        }
    }

    /*********************************************
    nazwa metody: Wyswietl
    opis metody: Wypisuje w konsoli wszystkie elementy tablicy wraz z ich indeksami.
    parametry: brak
    zwracany typ i opis: brak
    autor: dawidtrynkiewicz
    ***********************************************/
    public void Wyswietl()
    {
        for (int i = 0; i < this.size; i++)
        {
            Console.WriteLine($"{i}: {this.table[i]}");
        }
    }

    /*********************************************
    nazwa metody: ZnajdzPierwsza
    opis metody: Wyszukuje w tablicy pierwsze wystąpienie podanej wartości.
    parametry: value - szukana wartość całkowita
    zwracany typ i opis: int - indeks pierwszego znalezionego elementu lub -1, jeśli wartość nie istnieje w tablicy
    autor: dawidtrynkiewicz
    ***********************************************/
    public int ZnajdzPierwsza(int value)
    {
        for (int i = 0; i < this.size; i++)
        {
            if (this.table[i] == value)
            {
                return i;
            }
        }
        return -1;
    }

    /*********************************************
    nazwa metody: WyswietlPolicz
    opis metody: Wypisuje w jednym wierszu wszystkie liczby nieparzyste z tablicy i zlicza ich ilość.
    parametry: brak
    zwracany typ i opis: int - liczba znalezionych elementów nieparzystych
    autor: dawidtrynkieiwcz
    ***********************************************/
    public int WyswietlPolicz()
    {
        int count = 0;
        Console.WriteLine("liczby nieparzyste w tablicy: ");
        for (int i = 0; i < this.size; i++)
        {
            if (this.table[i] % 2 != 0)
            {
                Console.Write(this.table[i] + " ");
                count++;
            }
        }
        Console.WriteLine();
        return count;
    }

    /*********************************************
    nazwa metody: Srednia
    opis metody: Oblicza średnią arytmetyczną wszystkich elementów znajdujących się w tablicy.
    parametry: brak
    zwracany typ i opis: double - wartość średniej arytmetycznej lub 0.0, gdy tablica jest pusta
    autor: dawidtrynkiewicz
    ***********************************************/
    public double Srednia()
    {
        if (this.size == 0) return 0.0;
        double sum = 0;
        for (int i = 0; i < this.size; i++)
        {
            sum += this.table[i];
        }
        return sum / this.size;
    }
}

class Program
{
    /*********************************************
    nazwa metody: Main
    opis metody: Główny punkt wejściowy programu. Prezentuje działanie klasy CustomArray.
    parametry: args - tablica argumentów wiersza poleceń
    zwracany typ i opis: brak
    autor: dawidtrynkiewicz
    ***********************************************/
    static void Main(string[] args)
    {
        int arraySize = 25;
        CustomArray myArray = new CustomArray(arraySize);

        Console.WriteLine("zawartosc tablicy");
        myArray.Wyswietl();
        Console.WriteLine(new string('-', 30));

        int searchValue = 500;
        int foundIndex = myArray.ZnajdzPierwsza(searchValue);

        if (foundIndex != -1)
        {
            Console.WriteLine($"wartosc {searchValue} zostala znaleziona na indeksie: {foundIndex}");
        }
        else
        {
            Console.WriteLine($"wartosci {searchValue} nie ma w tablicy.");
        }

        int oddCount = myArray.WyswietlPolicz();
        Console.WriteLine($"ilosc liczb nieparzystych w tablicy wynosi: {oddCount}");
        Console.WriteLine(new string('-', 30));

        double average = myArray.Srednia();
        Console.WriteLine($"srednia arytmetyczna wartosci w tablicy wynosi: {average:F2}");
    }
}
