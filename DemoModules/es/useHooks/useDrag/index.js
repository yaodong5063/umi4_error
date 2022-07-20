/* eslint-disable no-restricted-globals */

/**
 * @description 包装组件可拖拽
 * @author zhuhu
 */
import React, { useCallback, useRef } from "react";
import { jsx as _jsx } from "react/jsx-runtime";

const useDrag = (Component, componentRef) => {
  const coordinates = useRef({}); // 错误边界检测

  const catchCheck = (left, top, target) => {
    let _left = left;
    let _top = top; // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    left < 0 && (_left = 0); // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    top < 0 && (_top = 0);
    const maxLeft = document.body.clientWidth - target.clientWidth; // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    left > maxLeft && (_left = maxLeft);
    const maxTop = document.body.clientHeight - target.clientHeight; // eslint-disable-next-line @typescript-eslint/no-unused-expressions

    top > maxTop && (_top = maxTop);
    return [_left, _top];
  };

  const dragMove = useCallback(ev => {
    coordinates.current.clientX = ev.clientX;
    coordinates.current.clientY = ev.clientY;
    const {
      clientX,
      clientY,
      disX,
      disY
    } = coordinates.current;
    const target = componentRef && componentRef.current || ev.target;
    const [_left, _top] = catchCheck(clientX - disX, clientY - disY, target);
    target.style.cssText = `${target.style.cssText}left:${_left}px;top:${_top}px`;
  }, [componentRef]);
  const dragEnd = useCallback(ev => {
    document.removeEventListener("mousemove", dragMove);
    document.removeEventListener("mouseup", dragEnd);
    ev.target.style.cursor = "initial"; // document.onselectstart = null;
  }, [dragMove]);
  const dragStart = useCallback(ev => {
    const target = componentRef && componentRef.current || ev.target;
    coordinates.current = {
      startX: ev.clientX,
      startY: ev.clientY,
      disX: ev.clientX - target.offsetLeft,
      disY: ev.clientY - target.offsetTop
    };
    ev.target.style.cursor = "move";
    document.addEventListener("mousemove", dragMove, false);
    document.addEventListener("mouseup", dragEnd, false); // document.onselectstart = function() {
    //   return false;
    // };
  }, [componentRef, dragEnd, dragMove]);
  const DragComponent = useCallback(props => {
    const dragProps = {
      onMouseDown: dragStart,
      onMouseUp: dragEnd
    };
    return /*#__PURE__*/_jsx("div", { ...dragProps,
      children: componentRef && /*#__PURE__*/_jsx(Component, { ...props
      })
    }, "dragHeader");
  }, [dragStart, dragEnd, componentRef]);
  return [DragComponent];
};

export default useDrag;