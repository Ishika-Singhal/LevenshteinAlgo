## 🧠 What is Levenshtein Distance?

* Levenshtein Distance is a string metric for measuring the difference between two sequences. 
* It is calculated as the minimum number of **insertions**, **deletions**, or **substitutions(replacement)** required to change one string into the other.

####  For example:
kitten → sitting
kitten → sitten (substitute 'k' with 's')
sitten → sittin (substitute 'e' with 'i')
sittin → sitting (insert 'g')
Distance = 3

#### Algorithm(c++):-
```
#include <bits/stdc++.h>
using namespace std;

vector<vector<int>> distancematrix(string &str1, string &str2){
    int str1_size = str1.length();
    int str2_size = str2.length();
    
    vector<vector<int>> editmatrix(str1_size + 1, vector<int>(str2_size + 1, 0));
    for (int i = 0; i <= str1_size; i++){        
        editmatrix[i][0] = i;
    }
    for (int j = 0; j <= str2_size; j++){      
        editmatrix[0][j] = j;       
    }
    for (int i = 1; i <= str1_size; i++){
        for (int j = 1; j <= str2_size; j++){
            if (str1[i - 1] == str2[j - 1]){
                editmatrix[i][j] = editmatrix[i - 1][j - 1];   //match (same chararcter)
            }
            else {
                editmatrix[i][j] = 1 +
                     min(editmatrix[i - 1][j - 1],    //replace
                     min(editmatrix[i - 1][j],        //delete
                         editmatrix[i][j - 1]));      //insert
            }
        }
    }
    return editmatrix;
}
int main(){
    string str1, str2;
    cout << "Enter the first string" << endl;
    getline(cin, str1);
    cout << "Enter the second string" << endl;
    getline(cin, str2);
    vector<vector<int>> editmatrix = distancematrix(str1, str2);
    for (int i = 0; i < editmatrix.size(); i++){
        for (int j = 0; j < editmatrix[0].size(); j++){
            cout << editmatrix[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
```