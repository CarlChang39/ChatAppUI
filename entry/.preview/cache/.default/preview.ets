struct preview{build(){Search({ value: '', placeholder: '' })
            .placeholderColor(Color.Black)
            .placeholderFont({ size: 16, weight: 10, family: 'serif', style: FontStyle.Normal })
            .onSubmit((value: string) => {
              this.submitValue = value
            })
            .onChange((value: string) => {
              this.changeValue = value
            })}}