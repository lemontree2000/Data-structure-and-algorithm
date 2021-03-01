import { defineComponent, reactive, h, ref } from "vue";
import { Queue } from "../../components/03_Queue/Queue";
// import './test'

function passGame(nameList, num) {
    const q = new Queue()
    nameList.forEach(element => {
        q.enqueue(element)
    });
    while (q.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            q.enqueue(q.dequeue())
        }
        q.dequeue()
    }
    return nameList.indexOf(q.front())
}

export default defineComponent({
    setup() {
        const nameList = reactive(['郭涛', '郭敬明', '韩寒', '肖战', '吴越', '王祖贤'])
        const lastNameIndex = ref(0);
        const num = ref();
        return {
            nameList,
            lastNameIndex,
            num,
        }
    },
    render(ctx) {
        return (
            <div>
                击鼓传花queue
                <div>
                    规则：几个朋友一起玩一个游戏，围成一圈，开始数数，数到某个数字的人自动淘汰。最后剩下的这个人会获得胜利，请问最后剩下的是原来在哪一个位置上的人
                </div>
                <div>
                    数字：<input type="text" value={ctx.num} onInput={e => ctx.num = e.target.value} />
                    <button onClick={() => ctx.lastNameIndex = passGame(ctx.nameList, ctx.num)}>开始</button>
                </div>
                <div>
                    玩家： ['郭涛','郭敬明','韩寒','肖战','吴越','王祖贤']
                </div>
                <div>
                    最后的人：{ctx.nameList[ctx.lastNameIndex]}
                </div>
            </div>
        )
    }
})