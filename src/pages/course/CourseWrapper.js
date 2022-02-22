import styled from 'styled-components'

const CourseWrapper = styled.div`
  .star {
    color: rgb(255, 200, 26);
    .play-btn {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: white;
    }
  }
  ul {
    li {
      border-radius: none important;
    }
  }
  .MuiPaper-root {
    border-radius: none important;
    border: none !important;
    box-shadow: none !important;
    // background: red;
  }
`
export default CourseWrapper
