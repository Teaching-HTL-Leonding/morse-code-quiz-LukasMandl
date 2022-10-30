import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoder',
  templateUrl: './decoder.component.html',
  styleUrls: ['./decoder.component.css']
})
export class DecoderComponent {

  constructor() {
    this.inputText = ''
    this.outputText = ''
  }
  public inputText: string;
  public outputText: string;

  public decode(): void{
    const morseCode = [
      /* A */ '.-',
      /* B */ '-...',
      /* C */ '-.-.',
      /* D */ '-..',
      /* E */ '.',
      /* F */ '..-.',
      /* G */ '--.',
      /* H */ '....',
      /* I */ '..',
      /* J */ '.---',
      /* K */ '-.-',
      /* L */ '.-..',
      /* M */ '--',
      /* N */ '-.',
      /* O */ '---',
      /* P */ '.--.',
      /* Q */ '--.-',
      /* R */ '.-.',
      /* S */ '...',
      /* T */ '-',
      /* U */ '..-',
      /* V */ '...-',
      /* W */ '.--',
      /* X */ '-..-',
      /* Y */ '-.--',
      /* Z */ '--..',
    ];
    //.... . .-.. .-.. --- / .-- --- .-. .-.. -..
    //HELLO WORLD
    this.inputText += ' '
    this.outputText = ''
    let letter = ''
    for(let ch of this.inputText)
    {
      if(ch !== ' ')
      {
        if(ch === "/")
        {
          this.outputText += " "
        }
        else{
          letter += ch
        }

      }
      else if(letter.trim() != "")
      {
        if(morseCode.indexOf(letter) === -1)
        {
          this.outputText = "ERROR WRONG MORSE CODE"
          return
        }
        this.outputText+= String.fromCharCode(morseCode.indexOf(letter) + 'A'.charCodeAt(0))
        letter = ""
      }
    }
    this.outputText = this.outputText.trim()
    this.inputText = this.inputText.trim()

  }



}
