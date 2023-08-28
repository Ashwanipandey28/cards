import { CardBox } from "./cardBox";
import "./style.css";

const Cards = () => {
  const data = [
    {
      title: "Live Caption 1",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:
        "data:image/png;base64,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"
    },
    {
      title: "Live Caption 2",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:
        "data:image/png;base64,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"
    },
    {
      title: "Live Caption 3",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:
        "data:image/png;base64,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"
    },
    {
      title: "Live Caption 1",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:
        "data:image/png;base64,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"
    },
    {
      title: "Live Caption 2",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:
        "data:image/png;base64,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"
    },
    {
      title: "Live Caption 3",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:
        "data:image/png;base64,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"
    },
    {
      title: "Live Caption 1",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:
        "data:image/png;base64,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"
    },
    {
      title: "Live Caption 2",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8CAgIAAAD4+Pjr6+tdXV2Dg4Ourq6Li4uysrLy8vK7u7v19fXc3NwUFBT7+/vMzMx4eHjCwsKbm5ttbW3W1tbl5eVmZmZycnJOTk6kpKQvLy83NzeXl5c9PT3i4uJUVFQZGRlKSkpBQUGHh4cxMTEjIyMgICBZWVlDr6J+AAAIDklEQVR4nO2d2XbiMAyGiaDstBDKTlm7vf8TDtDSYfEiS/LCOf4vZw5OvjqRZUlWKpWsrKysrKysrKysrKysrKysrKysrKwsMb2M+53W8H3wOjlqWm/OW+WoHfuuZFTrzwebZ1DrY/LeGcW+Q4aqo+HkzFKo9Pt/i3prHfteCerNZ3q0e87toPNQD22/vkDiXVLO5rXYN45Tr751oruknDW6sW/fpu58QaG7gJz0YzOY1Jsy8P4gv+bV2CAa9WdsvvNENlN8I8uVCN8Zsp4aY38vx3dmTOlZ7e1E8c6Mb7G5zmoP5Pl+GJ87sdlOasg+n9eMm3FsvErNwwN6xRj7UZ175TshfsR0yz1P4JlxGA2wE4DvhLiJtO+ohwE8MhYxnNX2PhhgnCd1FJDvhDgJDNgKC3hkXAV9Gd+CAx4QnwMuG+FszBUiBIvLTWLwnRDLMIDfkQCPiEFc8XiAgRCfIgIGeVBjvYP/ET27N4PIgN4t6hs/ViiA6DFIxfVkAKYSiJ/eYlRcXxRgLbJlhp0nwDYXcHVMSvRVo9xlFi0jDfwQrliAf7uD2uftOMrsqXmwlg9AnhkFaJ4Hqn5f3z/sxtVblYXxagA9eUBeyAKgcTHWlecOoNoWtSyTuHiRBqwxAa/X6cbFaPCsvp5lxKk04Y4FuL0N7F7YGyKhtIc6ZAHu7zO7tY/ziDTCA6JounjMeEY1IZaXs70hEhaykZs9B7CpGfTX3lAJC8ltRoMDqF+6fuwNnbAQ8966nNoD02bn5AaSCQuoSxHS1/p7I3rDcbA3DEKpdb9HnkLYWe3dBuiEYi74hgyIsXZ1BmEhs+FXbgYwV0cmN1vAIFxIEC6pgFj/XxmVwBGKbDJK2hRyI0ZYQoFJpO0KbUZUirDgu6d9GuCeu7lBE7InkWJIAV65l0UTsn03ylooUiGCJ2SuiVMKoEQQBU/Ic2wI4TWhmDSakBl4m7sDfspEpB0IgWPVFq6EMBPa0eAJi6sgl6Ncg9wgFx9yIZzRL/PuCihXZudCCHTvwm0KZYyoO2FBLydy82dkE3tOhCvqVeouhLAQTes5EZIf07sUiukqO9kwuwthAXPaRdYuL7t0kN2NkOi54Zd7D6WDTnkSdXLHLvS2wkuVi1PpHG27jY6SeqqOcEnnaePqRo3Qe1BPtREOOzf4oFwA+RrCRjxXeVYbH0FRxutsQpV3ga+igR+9ot8UyouIWQ29119j7Q3lPjApwwClgkh7Q4kMIZzSIEW7OHsDS/eR7XltWASpLe9ijj0AwdTYUmrg0YjeCGNvCPEoS2LbsxG9FsLeECyCedDAh1js9sZ9e2H22YJVzZ+1NleBUWKKaxMhFB7KysyqWuwNfLuOaPJKYRnjKLm5+NZ9i1jqh4PvUEb0WkPjY/XpelNavzuoEb2WKVnrXgSmq1mPeWa1st5qEd23+ZpgcHAjeq2utkTSvYJfHUmMYERvpO1u4EyodNoCeaJG6eyNs9umInRfc3xIY2+c9zmK5C8t3COvmrLCR4AQFm/NO7377us0v7/mm/oNciVUjKI8FuHbu9lgz2JIEKqG9U6IPu4oYmnSJnQ96Y3LrKVE6HonzQcjdPfacAcsHpnQcu4oPcJn1zIXXA4/IULngCmulCYhQueiGlwONiFC9zNCj0bo7jTrt9NpErpXKyHTh8kQuicQUUs+jvClbKmEuic0ofveHLUgoghHyk3JQZiwK5KQkntC5e0whPo6Y0w9GpZw406IKoDGEBoqHhB7Oiwh5aAe5jQQhtCwS0FU92IJKel2zP4pHUJKHzCMqUmFkGJocH5bMoS0c92IQv1kCGkFpohQTSKE1HMzncchVB60tQtRfpkKITWlaS+hTYWQmvKz11+mQUhvAoLovpEGIb0HiLXhRyKE9ApJa8ePJAg5x/Os+4s0CDnFIbY+kGkQcqpcbXHhFAiZ59UtvmkShIwjpBXrkpgAIe8YcKVStZWZxid8ZwHagorxCTlHZH9kXjASIOQ3qDCGa6ITAilAcy1jMCM+IX8KzZMYm5D/Fh5lehOjE8pU8xoaQEcmFOsOaarMjUsoVa+sD0nFJYQvCbqTZtrsUUxCyYps7YoRl/BJgu1X+sr9eITUQ/gaaVJtUQlle3prMsIRCSlZX6PUlXzxCIWf0aOUAfBohD5OtiizGBi/kEeoWajkGuxeSP1RA/ufkkeoef/3EkR3Up1WQRSMsAjVcSJvpViq6Kndu+cQqvvfeuwDoMpjwKqs3X284UIWQsMvuz31MS5gxg9Naj8rrY1NekLST9nRNZPUzTKogLRfigQu9Ar8YUcV4MYrILlxshwgufvcgyBSepg4K9A3ctWAqyAfXI83i7AP9EV5ah96NiCjUamj6F9L4PAF/WDu/Xe3AgD6XOjvVd0FnkafrppG2qP/ngAjfJk74GedAZZRWh2sPwMxgpcdPUoSX6RE8MXsNhLAvwHYRG3G0X7yzBjBht6qU3hkPKzy8bupVKp18y6Xw/cVtd/Pf/U2PhBBsok9W+VCmvHAN0jgAb1Q50uS8cD3KlFlIavWUup9PIwzTY/vqHImwHiMsdVj9PTD6RjDZTEefr5o+O5bxFO1tbfESM3TNwjQuJet2nBFgDz+ZJLI8ofQeL6xhbtv4OBzUMZpOElWu2wusWH97dOcX0QZRe3R8HWrzkL8/ev+vfWgdH+q9sphfbKEG21302ajn+ayR9VLbT0a9fv9UW+clj+WlZWVlZWVlZWVlZWVlZWVlZUlon9e7nso5OfvMQAAAABJRU5ErkJggg=="
    },
    {
      title: "Live Caption 3",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      img:
        "data:image/png;base64,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"
    }
  ];

  return (
    <div className="container">
      <div className="heading-box">
        <div className="heading">
          <h1>The Highlighting Part Of Our Solution</h1>
        </div>
        <div className="para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas Werat viverra id et aliquet. vulputate egestas sollicitudin
            .
          </p>
        </div>
      </div>

      <div className="boxes">
        {data.map((ele) => (
          <CardBox value={ele} />
        ))}
      </div>
    </div>
  );
};

export { Cards };