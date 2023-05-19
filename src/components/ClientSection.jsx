import { clients } from "../constants";
import styles from "../style";

const ClientSection = () => (
  <>
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div
            key={client.id}
            className={`${
              styles.flexCenter
            } flex-1 sm:min-w-[192px] min-w-[120px] ${
              index === clients.length - 1 ? "mr-0" : "sm:mr-[2rem]"
            } my-[0.5rem] glowingBrand rounded-full py-[10px] items-center cursor-pointer`}
          >
            <img
              src={client.logo}
              alt="client"
              className="sm:w-[192px] w-[100px] object-contain "
            />
          </div>
        ))}
      </div>
    </section>
  </>
);

export default ClientSection;
