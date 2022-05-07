<template>
  <div class="page-card">
    <div class="simple-wrapper">
      <div class="simple-container">
        <div class="calculator">
          <input
            :value="value"
            class="calculator-input"
            readonly
            style="grid-column: 1 / span 4"
          />
          <div
            v-for="(item, index) in keyboard"
            :key="index"
            :style="{ gridColumn: `${item.span}` }"
            class="calculator-item"
            @click="setValue(item)"
          >
            <span v-if="item.value === '.'" class="custom-dot" />
            <span v-else-if="item.value === '('">(</span>
            <span v-else-if="item.value === ')'">)</span>
            <font-awesome-icon v-else :icon="item.icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tempValue: '',
      keyboard: [
        {
          value: 'remove',
          icon: ['fas', 'angle-left'],
          span: '1 / span 4',
          type: 'remove'
        },
        {
          value: 'c',
          icon: ['fas', 'c'],
          span: '',
          type: 'set-empty'
        },
        {
          value: '(',
          icon: '',
          span: '',
          type: 'value'
        },
        {
          value: ')',
          icon: '',
          span: '',
          type: 'value'
        },
        {
          value: '/',
          icon: ['fas', 'divide'],
          span: `4 / span 1`,
          type: 'value'
        },
        {
          value: '7',
          icon: ['fas', '7'],
          span: '',
          type: 'value'
        },
        {
          value: '8',
          icon: ['fas', '8'],
          span: '',
          type: 'value'
        },
        {
          value: '9',
          icon: ['fas', '9'],
          span: '',
          type: 'value'
        },
        {
          value: '*',
          icon: ['fas', 'times'],
          span: '',
          type: 'value'
        },
        {
          value: '4',
          icon: ['fas', '4'],
          span: '',
          type: 'value'
        },
        {
          value: '5',
          icon: ['fas', '5'],
          span: '',
          type: 'value'
        },
        {
          value: '6',
          icon: ['fas', '6'],
          span: '',
          type: 'value'
        },
        {
          value: '-',
          icon: ['fas', 'minus'],
          span: '',
          type: 'value'
        },
        {
          value: '1',
          icon: ['fas', '1'],
          span: '',
          type: 'value'
        },
        {
          value: '2',
          icon: ['fas', '2'],
          span: '',
          type: 'value'
        },
        {
          value: '3',
          icon: ['fas', '3'],
          span: '',
          type: 'value'
        },
        {
          value: '+',
          icon: ['fas', 'plus'],
          span: '',
          type: 'value'
        },
        {
          value: '-',
          icon: ['fas', 'plus-minus'],
          span: '',
          type: 'sign'
        },
        {
          value: '0',
          icon: ['fas', '0'],
          span: '',
          type: 'value'
        },
        {
          value: '.',
          icon: '',
          span: '',
          type: 'value'
        },
        {
          value: '=',
          icon: ['fas', 'equals'],
          span: '',
          type: 'equal'
        }
      ]
    }
  },
  computed: {
    value: {
      set(value) {
        this.tempValue = value
      },
      get() {
        return this.tempValue
      }
    }
  },
  methods: {
    setValue(item) {
      const lastChar = this.value.slice(-1)
      switch (item.type) {
        case 'value':
          if (
            ['+', '-', '*', '/'].includes(item.value) &&
            ['+', '-', '*', '/'].includes(lastChar)
          ) {
            if (item.value === lastChar) return
            else {
              this.value = this.value.slice(0, -1) + item.value
              return
            }
          }

          this.value += item.value
          break
        case 'remove':
          this.value = this.value.slice(0, -1)
          break
        case 'set-empty':
          this.value = ''
          break
        case 'sign':
          if (this.value.substring(0, 1) === '-') {
            this.value = this.value.slice(1)
          } else {
            this.value = '-' + this.value
          }
          break
        case 'equal':
          this.value = eval(this.value).toString()
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.simple {
  &-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    background: #161623;
  }
  &-container {
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 16px;
    margin: 0 auto;
  }
}
.custom-dot {
  width: 5px;
  height: 5px;
  background: #fff;
  border-radius: 50%;
}

.calculator {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 4px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  padding: 8px;
  user-select: none;
  border-radius: 3px;

  &-input {
    text-align: right;
    height: 100px;
    padding: 25px;
    color: #fff;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 20px;
    outline: none;
    border-radius: 3px;
  }

  &-item {
    display: grid;
    place-items: center;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    // box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 3px;

    &:hover {
      transition: 0s;
      background: rgba(255, 255, 255, 0.5);
    }
    &:active {
      background: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
