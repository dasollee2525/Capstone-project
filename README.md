# 2021-2 Capstone project(SWE3028): TeamA - Jjangdol

## Fontmaking Webservice using AI model : DM-font 

### Brief Explanation


Hangul is a language that is composed of initial, medial, and final consonant. This leads to 11,172 combinations of characters in Hangul. For this reason, the current method of designing all the characters by hand is very expensive and time-consuming compared to English. We developed web-service(GANdan-fontmaker) based on Dual Memory-Augmented Font Generation Network(DM-font). Our service provides two distinctive functions; combining people’s font style and re-correcting font style for satisfying user needs.


## Environment

####Install dependencies in Conda Env:

```commandline
conda install --name CONDA_ENV_NAME --file requirements.txt
```
Note that using different version of required packages can effects the results, especially PyTorch. The implementations are tested on Python 3.7+


####Should pull out the dmfont, and ProgramFiles directories outside of Capstone-project directory
```
.
├── dmfont                 # From Capstone-project directory
├── Capstone-project       # At first, contains dmfont, and ProgramFiles directories
│   ├── FlaskProj          
│   ├── web1               
│   └── ...                
└── ProgramFiles           # From Capstone-project directory

```


## Installation

###Open sources:

```
imagemagick
poppler
fontforge
potrace
```

###Pretrained model
Data sources for Korean-handwriting datasets were built from [UhBee fonts](http://uhbeefont.com/). For running the DM-font, pretrained model below.

● [Checkpoint trained on the Korean-handwriting dataset](https://drive.google.com/file/d/1y_8XDNtawtA2P7-pHbCQ3yGEcFX-9H1R/view?usp=sharing)
```
.       
├── dmfont       
│   ├── checkpoints                 # Make directory named "checkpoints"
│   │   ├── korean-handwriting.pth  # Download Pretrained model
│   └── ...                
└── ...

```

## How To Run

```
.
├── dmfont                
├── Capstone-project       # set the terminal(1) on this directory
│   ├── web1               # set the terminal(2) on this directory
│   ├── FlaskProj          # set the terminal(3) on this directory
│   └── ...                
└── ProgramFiles           

```
In terminal(1) Server using node.js will run. <br />
In terminal(2) Frontend using React will run. <br />
In terminal(3) Flask server will run.
<br /><br />
####terminal command:
```
terminal(1)> node server
terminal(2)> npm start
terminal(3)> python HelloWorld.py
```

