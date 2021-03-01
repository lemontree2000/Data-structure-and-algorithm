import { defineComponent, h, ref } from "vue";
import { dec2binary } from '../../components/02_Stack/Stack'
// import './test'

export default defineComponent({
    name: 'stack',
    setup() {
        const decimalNumber = ref('')
        const binaryNumber = ref('')
        const handleChange = (e) => {
            if (isNaN(e.target.value)) {
                e.target.value = decimalNumber.value
                return
            }
            decimalNumber.value = Number(e.target.value)
        }

        return {
            decimalNumber,
            binaryNumber,
            handleChange
        }
    },
    render(ctx) {
        return (
            <div>
                <div>Stack</div>
                <div>十进制转二进制</div>
                <input type="text" onInput={ctx.handleChange} value={ctx.decimalNumber} />
                <button onClick={() => ctx.binaryNumber = dec2binary(ctx.decimalNumber)}>转二进制</button>
                <div>十进制为：{ctx.decimalNumber}</div>
                <div>二进制为：{ctx.binaryNumber}</div>
            </div>
        )
    }
})