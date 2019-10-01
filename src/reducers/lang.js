const lang = [{
  language: 'swedish',
  title: ' Testa om du kan få försörjningsstöd ',
  resultText: {
    yes: 'Beräkningen visar att dina månadsinkomster är ##### kr lägre än den nivå som kan ge rätt till försörjningsstöd. Det kan betyda att du får försörjningsstöd om du ansöker. Socialtjänsten gör en individuell bedömning och kan ta hänsyn till annat än ekonomiska faktorer. Kontakta socialtjänsten i din kommun om du vill ansöka om försörjningsstöd eller ha mer information.',
    no: 'Beräkningen visar att dina månadsinkomster är ##### kr högre än den nivå som kan ge rätt till försörjningsstöd. Det kan betyda att du inte får försörjningsstöd om du ansöker. Socialtjänsten gör en individuell bedömning och kan ta hänsyn till annat än ekonomiska faktorer. Kontakta socialtjänsten i din kommun om du vill ansöka om försörjningsstöd eller ha mer information.'
  },
  defaultActiveSection: 0,
  sections: [{
      section: 'income',
      sectionTitle: 'Inkomster',
      description: 'Ange hela hushållets inkomster per månad i respektive ruta. Beloppen ska vara netto efter skatt och avrundade till hela kronor. Inkomster som inte passar in kan du lägga ihop under övrigt. Om du inte anger några inkomster räknas de som noll (0).',
      inputs: [{
          id: 1,
          title: 'Lön',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Salary',
            placeholder: 'belopp'
          }]
        },
        {
          id: 2,
          title: 'Arbetslöshetsersättning',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Unions_Fees_And_A-kassa',
            placeholder: 'belopp'
          }]
        },
        {
          id: 3,
          title: 'Sjuk- och aktivitetsersättning',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'sick_activities_replacement',
            placeholder: 'belopp'
          }]
        },
        {
          id: 4,
          title: 'Sjukpenning',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Sickness_tillskott',
            placeholder: 'belopp'
          }]
        },
        {
          id: 5,
          title: 'Föräldrapenning',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'parental_allowance',
            placeholder: 'belopp'
          }]
        },
        {
          id: 6,
          title: 'Pension',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'pension',
            placeholder: 'belopp'
          }]
        },
        {
          id: 7,
          title: 'Underhållsstöd/-bidrag',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'maintenance_grants',
            placeholder: 'belopp'
          }]
        },
        {
          id: 8,
          title: 'Barnbidrag',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'child_benefit',
            placeholder: 'belopp'
          }]
        },
        {
          id: 9,
          title: 'Studiestöd',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'student_aid',
            placeholder: 'belopp'
          }]
        },
        {
          id: 10,
          title: 'Bostadsbidrag',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'housing_benefit',
            placeholder: 'belopp'
          }]
        },
        {
          id: 11,
          title: 'Övrigt',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Others',
            placeholder: 'belopp'
          }]
        }
      ]
    },
    {
      section: 'expenses',
      sectionTitle: 'Utgifter',
      description: 'Ange hela hushållets utgifter per månad i respektive ruta. Avrunda till hela kronor. Om du inte anger några kostnader räknas de som noll (0).',
      inputs: [{
          id: 7,
          title: 'Bostad',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Rent',
            placeholder: 'belopp'
          }]
        },
        {
          id: 8,
          title: 'Hushållsel',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Electricity',
            placeholder: 'belopp'
          }]
        },
        {
          id: 9,
          title: 'Arbetsresor',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Home_Insurance',
            placeholder: 'belopp'
          }]
        },
        {
          id: 10,
          title: 'Hemförsäkring',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Broadband',
            placeholder: 'belopp'
          }]
        },
        {
          id: 11,
          title: 'Fackföreningsavgift och avgift för arbetslöshetskassa',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
            type: 'number',
            name: 'Childcare',
            placeholder: 'belopp'
          }]
        }
      ]
    },
    {
      section: 'familyStatus',
      sectionTitle: 'Familje förhållande',
      description: 'De uppgifter du matar in om hushållets medlemmar avgör vilka belopp som hämtas från riksnormen. Om du inte anger något hämtas beloppet för ensamstående utan barn.',
      allFamilyCountText: 'familjemedlemmar Antal ',
      inputs: [{
          id: 1,
          type: 'radio',
          title: 'hushållets vuxna medlemmar',
          defaultValue: '1',
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
              title: 'Jag är ensamstående',
              key: '0'
            },
            {
              title: 'Jag är sammanboende (med vuxen)',
              key: '1'
            }
          ]
        },
        {
          id: 2,
          title: 'Fyll i hur många barn som bor hos dig',
          checked: false,
          helpText: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            ',Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '
          ],
          userInputs: [{
              name: '0-1',
              type: 'number',
              placeholder: '0-1 år',
              max: 9
            },
            {
              name: '1-2',
              type: 'number',
              placeholder: '1-2 år',
              max: 9
            },
            {
              name: '3',
              type: 'number',
              placeholder: '3 år',
              max: 9
            },
            {
              name: '4-6',
              type: 'number',
              placeholder: '4-6 år',
              max: 9
            },
            {
              name: '7-10',
              type: 'number',
              placeholder: '7-10 år',
              max: 9
            },
            {
              name: '11-14',
              type: 'number',
              placeholder: '11-14 år',
              max: 9
            },
            {
              name: '15-18',
              type: 'number',
              placeholder: '15-18 år',
              max: 9
            },
            {
              name: '19-20',
              type: 'number',
              placeholder: '19-20 år, går i skolan',
              max: 9
            }
          ]
        }
      ]
    }
  ],
  buttons: {
    resetBtn: 'Reset',
    finish: 'Finish',
    next: 'Next',
    back: 'Back'
  },
  steppersSteps: {
    incomeStepTitle: 'Income',
    expensesStepTitle: 'Expenses',
    summaryStepTitle: 'Summary',
    familyStatus: 'Family Status'
  }
}];
export default lang