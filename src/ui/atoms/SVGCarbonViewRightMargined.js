import styled from "@emotion/styled";

export function SVGCarbonViewRightMargined(props) {
  return (
    <Svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      Style={props.Style}
    >
      <path
        d="M21.271 10.7662C20.4623 8.67463 19.0586 6.8658 17.2331 5.56331C15.4077 4.26082 13.2406 3.52177 10.9997 3.4375C8.75881 3.52177 6.59172 4.26082 4.76628 5.56331C2.94084 6.8658 1.53707 8.67463 0.728458 10.7662C0.673847 10.9173 0.673847 11.0827 0.728458 11.2338C1.53707 13.3254 2.94084 15.1342 4.76628 16.4367C6.59172 17.7392 8.75881 18.4782 10.9997 18.5625C13.2406 18.4782 15.4077 17.7392 17.2331 16.4367C19.0586 15.1342 20.4623 13.3254 21.271 11.2338C21.3256 11.0827 21.3256 10.9173 21.271 10.7662ZM10.9997 17.1875C7.35596 17.1875 3.50596 14.4856 2.11033 11C3.50596 7.51437 7.35596 4.8125 10.9997 4.8125C14.6435 4.8125 18.4935 7.51437 19.8891 11C18.4935 14.4856 14.6435 17.1875 10.9997 17.1875Z"
        fill="#F5B61A"
      />
      <path
        d="M11 6.875C10.1842 6.875 9.38663 7.11693 8.70827 7.57019C8.02992 8.02345 7.50121 8.66769 7.189 9.42143C6.87679 10.1752 6.7951 11.0046 6.95426 11.8047C7.11343 12.6049 7.50629 13.3399 8.08319 13.9168C8.66008 14.4937 9.39508 14.8866 10.1953 15.0457C10.9954 15.2049 11.8248 15.1232 12.5786 14.811C13.3323 14.4988 13.9766 13.9701 14.4298 13.2917C14.8831 12.6134 15.125 11.8158 15.125 11C15.125 9.90598 14.6904 8.85677 13.9168 8.08318C13.1432 7.3096 12.094 6.875 11 6.875ZM11 13.75C10.4561 13.75 9.92442 13.5887 9.47218 13.2865C9.01995 12.9844 8.66747 12.5549 8.45933 12.0524C8.25119 11.5499 8.19673 10.9969 8.30284 10.4635C8.40895 9.93005 8.67086 9.44005 9.05546 9.05546C9.44005 8.67086 9.93006 8.40895 10.4635 8.30284C10.997 8.19673 11.5499 8.25119 12.0524 8.45933C12.5549 8.66747 12.9844 9.01995 13.2865 9.47218C13.5887 9.92442 13.75 10.4561 13.75 11C13.75 11.7293 13.4603 12.4288 12.9445 12.9445C12.4288 13.4603 11.7293 13.75 11 13.75Z"
        fill="#F5B61A"
      />
    </Svg>
  );
}

const Svg = styled.svg`
  min-width: 1.375rem;
  max-width: 1.375rem;
  height: 1.375rem;

  margin-right: 1.25rem;
  ${(props) => props.Style}
`;
