"use client";
import Mapir from "mapir-react-component";
import "mapir-react-component/dist/index.css";
const Map = () => {
  const Map = Mapir.setToken({
    transformRequest: (url) => {
      return {
        url: url,
        headers: {
          "x-api-key":
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3YWMxYWE3YTAyYzk2NzIwNGMxMTBkNzU5OTE1N2RmNDZmOTZkN2YxMTNkOTc2NWE4YjZlMmU2NTMzZjBmNmQyYTI2YzQ1MGRmMTUzMDFmIn0.eyJhdWQiOiIyNTAwOSIsImp0aSI6IjU3YWMxYWE3YTAyYzk2NzIwNGMxMTBkNzU5OTE1N2RmNDZmOTZkN2YxMTNkOTc2NWE4YjZlMmU2NTMzZjBmNmQyYTI2YzQ1MGRmMTUzMDFmIiwiaWF0IjoxNzAwNDg1MDE1LCJuYmYiOjE3MDA0ODUwMTUsImV4cCI6MTcwMjk5MDYxNSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Ohvh3esHolcEM0hyJNEAUMZzXWq9Kl8gQ6pwOaDZZiAP1MA3JaEshwmXNEkxVMo3c_b3D2CoUeVYQntYB7RzNJb9kh9_oPdsm-gxHBOe5-MH3z4J4kr23kI2UIob2W76KyL_t08kvv3nZ6bSXP_vxiVALgVyvJ6bxoi5jZgDVMKLSMrIDNl9r8KM5BtzmDRC99_TqXBqLWVQLoCv_B7YVrXWQhSkHGxFAjCVa99ZQCJH3KrhOk7oycDD6z-XbVR4VzTlf9HO8fOknZsv84GW77OLTHd1gSZnb3VSkJxuis0gmOpj99HwKslnrEGzGoRlg9mvESsLAk-hDDPEHw3FWw",
          "Mapir-SDK": "reactjs",
        },
      };
    },
  });

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <Mapir
        Map={Map}
        containerStyle={{
          width: "100%",
          height: "calc(100% + 35px)",
        }}
        apiKey={
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjU3YWMxYWE3YTAyYzk2NzIwNGMxMTBkNzU5OTE1N2RmNDZmOTZkN2YxMTNkOTc2NWE4YjZlMmU2NTMzZjBmNmQyYTI2YzQ1MGRmMTUzMDFmIn0.eyJhdWQiOiIyNTAwOSIsImp0aSI6IjU3YWMxYWE3YTAyYzk2NzIwNGMxMTBkNzU5OTE1N2RmNDZmOTZkN2YxMTNkOTc2NWE4YjZlMmU2NTMzZjBmNmQyYTI2YzQ1MGRmMTUzMDFmIiwiaWF0IjoxNzAwNDg1MDE1LCJuYmYiOjE3MDA0ODUwMTUsImV4cCI6MTcwMjk5MDYxNSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Ohvh3esHolcEM0hyJNEAUMZzXWq9Kl8gQ6pwOaDZZiAP1MA3JaEshwmXNEkxVMo3c_b3D2CoUeVYQntYB7RzNJb9kh9_oPdsm-gxHBOe5-MH3z4J4kr23kI2UIob2W76KyL_t08kvv3nZ6bSXP_vxiVALgVyvJ6bxoi5jZgDVMKLSMrIDNl9r8KM5BtzmDRC99_TqXBqLWVQLoCv_B7YVrXWQhSkHGxFAjCVa99ZQCJH3KrhOk7oycDD6z-XbVR4VzTlf9HO8fOknZsv84GW77OLTHd1gSZnb3VSkJxuis0gmOpj99HwKslnrEGzGoRlg9mvESsLAk-hDDPEHw3FWw"
        }
      />
    </div>
  );
};

export default Map;
