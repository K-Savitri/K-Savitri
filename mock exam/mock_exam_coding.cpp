//Sort Characters By Frequency
//
//Problem Statement : Given a string s, sort it in decreasing order based on the frequency of characters.
//
//Input : A string s.
//
//Output : A string with characters sorted in decreasing order by frequency.
//
//Test Case
//
//Input : s = "tree"
//
//Output : "eert"
//
//Explanation : Characters 'e' and 't' appear twice, and 'r' and 'e' once.Hence, 'e' comes before 't' in the output.

//#include <bits/stdc++.h>
#include <iostream>
using namespace std;
#include <string.h>
#include <unordered_map>
#include <map>


multimap<int, int> mapvalues(string s, multimap<int, int> map) {

	for (int i = 0; i < s.length(); i++) {

		int a = s[i];  //converting char to ascii
		map.emplace(a, 1);
	}
	return map;

}

int main() {
	//a-97
   ////b-122
   //A-65
   //B-90
	/*int a = 'a';
	int b = 'z';
	int x = 'A';
	int y = 'Z';*/
	string s;
	cin >> s;
	//ss(s);

	//cout << a << endl << b << endl << x << endl << y;

	unordered_map<int, int> umap;
	multimap<int, int> map;
	
	map =	mapvalues(s, map);



//printing the output
	for (std::map<int, int>::iterator it = map.begin(); it != map.end(); ++it)
	{
		//std::cout << it->first << " => " << it->second << '\n';
		char x = it->first;
		cout << x;


	}

}


