import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css']
})

export class EncoderComponent {
  public inputText:string;
  public outputText:string;

  constructor() {
    this.inputText = ''
    this.outputText = ''
  }

  public encode():void{
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
    this.outputText = ''
    // A -> 65
    this.inputText = this.inputText.trim()
    for(let ch of this.inputText)
    {
      if(ch.match(/[A-Z]/))
      {
        let alphabetIndex = ch.charCodeAt(0) - 65
        this.outputText += morseCode[alphabetIndex]
        this.outputText +=" "
      }
      else if(ch.match(/[ ]/) && this.outputText[this.outputText.length - 2] != "/")
      {
        this.outputText += "/ "
      }

    }
    this.outputText = this.outputText.slice(0, this.outputText.length - 1)



  }



}
